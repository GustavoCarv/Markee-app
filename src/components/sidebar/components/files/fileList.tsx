/* import { useState } from 'react' */
import { File } from './file'
import { FileType } from '../../../../resources/files'

function FileList () {
  /*   const [isActive, SetIsActive] = useState(false) */
  const files: FileType[] = [
    {
      id: '0',
      name: 'README.md',
      content: 'Conteúdo do README',
      active: false,
      status: 'saved',
    },
    {
      id: '1',
      name: 'CONTRIBUTING.md',
      content: 'Conteúdo do Contributing',
      active: true,
      status: 'editing',
    },
  ]

  /*   const handleActiveType = (id: string) => {
    const newFiles: FileType[] = [...files]
    newFiles.forEach((item) => {
      if (item.id === id) {
        item.active = true
      } else {
        item.active = false
      }
    })
    files = newFiles
  } */

  const Content = files.map((item) => {
    return (
      <File
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        status={item.status}
        content={item.content}
      />
    )
  })

  return <>{Content}</>
}

export { FileList }
