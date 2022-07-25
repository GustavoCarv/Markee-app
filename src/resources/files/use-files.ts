import { FileType } from 'resources/files'

import localforage from 'localforage'
import React, {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'

function useFiles() {
  const [files, setFiles] = useState<FileType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const updateStatus = () => {
      const file = files.find((item) => item.active === true)

      if (!file || file.status !== 'editing') return

      timer = setTimeout(() => {
        setFiles(
          files.map((item) => {
            if (item.active) {
              return { ...item, status: 'saving' as const }
            }

            return file
          }),
        )

        setTimeout(() => {
          setFiles(
            files.map((item) => {
              if (item.active) {
                return { ...item, status: 'saved' as const }
              }

              return file
            }),
          )
        }, 300)
      }, 2000)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [files])

  //separação de useEffects por necessidade de uso
  useEffect(() => {
    const setStorageFiles = async () => {
      await localforage.setItem('files', files)
    }

    setStorageFiles()
  }, [files])

  useLayoutEffect(() => {
    const getStorageFiles = async () => {
      const savedFiles = (await localforage.getItem('files')) as FileType[]
      if (savedFiles.length > 0) {
        setFiles(savedFiles)
        return
      }
      createNewFile()
    }

    getStorageFiles()
  }, [])

  const createNewFile = () => {
    inputRef?.current?.focus()

    const newFile: FileType = {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: false,
      status: 'saved',
    }
    const newFiles: FileType[] = [...files, newFile]
    newFiles.forEach((item) => {
      if (item.id === newFile.id) {
        item.active = true
      } else {
        item.active = false
      }
    })

    setFiles(newFiles)
  }

  const removeFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newFiles = [...files]
    const finalFiles = newFiles.filter((file) => {
      return file.id !== id
    })
    setFiles(finalFiles)
  }

  const handleActiveType = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    const newFiles: FileType[] = [...files]
    newFiles.forEach((item) => {
      if (item.id === id) {
        item.active = true
      } else {
        item.active = false
      }
    })
    setFiles(newFiles)
  }

  const handleUpdateName = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    setFiles(
      files.map((file) => {
        if (file.id === id) {
          return { ...file, name: e.target.value, status: 'editing' as const }
        }
        return file
      }),
    )
  }

  const handleUpdateContent = (
    id: string,
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFiles(
      files.map((file) => {
        if (file.id === id) {
          return {
            ...file,
            content: e.target.value,
            status: 'editing' as const,
          }
        }
        return file
      }),
    )
  }

  return {
    files,
    inputRef,
    createNewFile,
    removeFile,
    handleActiveType,
    handleUpdateContent,
    handleUpdateName,
  }
}

export { useFiles }
