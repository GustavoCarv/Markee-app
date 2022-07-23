import styled from 'styled-components/macro'

import { SideBar } from 'components/sidebar/sideBar'
import { Textarea } from 'components/textarea'
import { FileType } from 'resources/files'

import React, { ChangeEvent, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const [files, setFiles] = useState<FileType[]>([
    {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

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
      console.log(file.id !== id)
      return file.id !== id
    })
    setFiles(finalFiles)
  }

  const handleActiveType = (id: string) => {
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
    const newFiles = [...files]
    const mappedFiles = newFiles.map((file) => {
      if (file.id === id) {
        return { ...file, name: e.target.value }
      }
      return file
    })
    setFiles(mappedFiles)
  }

  const handleUpdateContent = (
    id: string,
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newFiles = [...files]
    const mappedFiles = newFiles.map((file) => {
      if (file.id === id) {
        return { ...file, content: e.target.value }
      }
      return file
    })

    setFiles(mappedFiles)
  }

  console.log(files)

  return (
    <MainContainer>
      <SideBar
        files={files}
        removeFile={removeFile}
        handleActiveType={handleActiveType}
        createNewFile={createNewFile}
        inputRef={inputRef}
      />
      <Textarea
        file={files.find(file => file.active === true )}
        onUpdateFileName={handleUpdateName}
        onUpdateFileContent={handleUpdateContent}
        inputRef={inputRef}
      />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 332px 1fr;

  overflow: hidden;
`

export { App }
