import { useState } from 'react'
import { File } from './file'

function Files() {
  const [isActive, SetIsActive] = useState(false)
  const testArr = [
    { content: 'conteudo 1', id: 1 },
    { content: 'conteudo 2', id: 2 },
  ]

  const Content = testArr.map((item, index) => {
    return <File key={index} content={item.content} />
  })

  return <>{Content}</>
}

export { Files }
