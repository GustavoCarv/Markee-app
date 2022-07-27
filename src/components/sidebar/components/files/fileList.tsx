import { FileType } from 'resources/files'
import { File } from './file'
import React from 'react'

type FileListProps = {
  files: FileType[]
  handleActiveType: (id: string, e: React.MouseEvent) => void
  removeFile: (id: string, e: React.MouseEvent) => void
}

function FileList({ files, handleActiveType, removeFile }: FileListProps) {
  const Content = files.map((item) => {
    return (
      <File
        key={item.id}
        item={item}
        handleActiveType={handleActiveType}
        removeFile={removeFile}
      />
    )
  })

  return <>{Content}</>
}

export { FileList }
