import { FileType } from 'resources/files'
import { File } from './file'

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
        id={item.id}
        name={item.name}
        active={item.active}
        status={item.status}
        content={item.content}
        handleActiveType={handleActiveType}
        removeFile={removeFile}
      />
    )
  })

  return <>{Content}</>
}

export { FileList }
