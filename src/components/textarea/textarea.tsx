import { ReactComponent as ActiveFile } from '../../assets/activeFile.svg'
import { ChangeEvent, RefObject } from 'react'
import { marked } from 'marked'

import 'highlight.js/styles/github.css'
import styled from 'styled-components/macro'
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
    <TextareaWrapper>
      <TitleWrapper>
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
      </TitleWrapper>
      <Text
        onChange={(e) => {
          onUpdateFileContent(file.id, e)
        }}
        placeholder='Insert the text here...'
        value={file.content}
      />
      <Article dangerouslySetInnerHTML={{ __html: marked.parse(file.content) }} />
    </TextareaWrapper>
  )
}

const containerMargin = '25px'
const elementsMarginTop = '42px'

const TextareaWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  margin-block: ${containerMargin};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  gap: 12px;

  width: 100%;

  & input {
    border: none;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -1px;
    height: 25px;

    :focus {
      outline: none;
    }
  }
`

const Text = styled.textarea`
  border: none;
  border-right: 2px rgba(30, 41, 59, 0.12) solid;
  padding-left: 26px;
  padding-right: 24px;
  padding-bottom: 24px;
  margin-top: ${elementsMarginTop};
  resize: none;
  width: 50%;
  height: calc(100vh - (2 * ${containerMargin} + ${elementsMarginTop}));
  box-sizing: border-box;
  outline: none;
  flex-grow: 1;

  font-family: Inconsolata, sans-serif;
  font-size: 1.125rem;
  color: rgba(30, 41, 59);

  ::placeholder {
    color: rgba(30, 41, 59, 0.86);
  }
`

const Article = styled.article`
  box-sizing: border-box;
  width: 50%;
  height: calc(100vh - (2 * ${containerMargin} + ${elementsMarginTop}));
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  margin-top: ${elementsMarginTop};

  overflow: scroll;
  overflow-x: hidden;
`

export { Textarea }
