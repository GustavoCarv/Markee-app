import { ReactComponent as ActiveFile } from '../../assets/activeFile.svg'

import styled from 'styled-components/macro'

function Textarea() {
  return (
    <Container>
      <TitleContainer>
        <ActiveFile />
        <input placeholder='Sem título'/>
      </TitleContainer>
      <TextContainer placeholder="Insert the text here..." />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 24px;
  gap: 12px;

  & input {
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 25px;
  }
`

const TextContainer = styled.textarea`
  border: none;
  border-right: 2px rgba(30, 41, 59, 0.12) solid ;
  padding-left: 26px;
  margin-top: 42px;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  flex-grow: 1;

  font-family: Inconsolata, sans-serif;
  font-size: 1.125rem ;
  color: rgba(30, 41, 59) ;

  ::placeholder {
    color: rgba(30, 41, 59, 0.86) ;
  }
`

export { Textarea }
