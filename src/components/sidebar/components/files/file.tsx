import styled, { css } from 'styled-components/macro'
import { ReactComponent as InactiveFile } from '../../../../assets/inactiveFile.svg'
import { ReactComponent as ActiveFile } from '../../../../assets/activeFile.svg'

interface FileProps {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

function File(props: Partial<FileProps>) {
  const ButtonContent = () => {
    switch (props.status) {
      case 'editing':
        return <div>Teste editando</div>

      case 'saving':
        return <div>Saving</div>

      case 'saved':
        return <div>saved</div>

      default:
        return <div>Close btn</div>
    }
  }

  return (
    <Container>
      {props.active ? <ActiveFile /> : <InactiveFile />}
      <FileTitle>{props.name}</FileTitle>
      <Button>{ButtonContent()}</Button>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  margin-block: 12px;

  position: relative;
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding-left: 10px;
  border-radius: 3.4px;

  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

const FileTitle = styled.a`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  height: 25px;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`

export { File }
