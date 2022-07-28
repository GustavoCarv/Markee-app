import { ReactComponent as ActiveFile } from '../../assets/activeFile.svg'
import { ChangeEvent, RefObject } from 'react'
import { marked } from 'marked'

import 'highlight.js/styles/github.css'
import * as S from './textarea-styles'
import { FileType } from 'resources/files'

import('highlight.js').then((highlight) => {
  const asyncHighlight = highlight.default
  marked.setOptions({
    highlight: (code, language) => {
      if (language && asyncHighlight.getLanguage(language)) {
        return asyncHighlight.highlight(code, { language }).value
      }

      return asyncHighlight.highlightAuto(code).value
    },
  })
}) // Assim a importação é asíncrona e não afeta o código no carregamento, já que não é necessário estar no onload

// highlight.highlightAll() --> Procura em todo o código para aplicar o highlight

// Específico para o texto do marked

type TextareaProps = {
  onUpdateFileName: (id: string, e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string, e: ChangeEvent<HTMLTextAreaElement>) => void
  file: FileType | undefined
  inputRef: RefObject<HTMLInputElement>
}

function Textarea ({
  onUpdateFileName,
  onUpdateFileContent,
  file,
  inputRef,
}: TextareaProps) {
  if (!file) {
    return null
  }

  return (
    <S.TextareaWrapper>
      <S.TitleWrapper>
        <ActiveFile />
        <input
          placeholder='Sem título'
          ref={inputRef}
          value={file.name}
          onChange={(e) => {
            onUpdateFileName(file.id, e)
          }}
          autoFocus
        />
      </S.TitleWrapper>
      <S.Text
        onChange={(e) => {
          onUpdateFileContent(file.id, e)
        }}
        placeholder='Insert the text here...'
        value={file.content}
      />
      <S.Article dangerouslySetInnerHTML={{ __html: marked.parse(file.content) }} />
    </S.TextareaWrapper>
  )
}

export { Textarea }
