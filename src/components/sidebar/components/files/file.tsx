import { ReactComponent as InactiveFile } from '../../../../assets/inactiveFile.svg'
import { ReactComponent as ActiveFile } from '../../../../assets/activeFile.svg'
import { StatusIcon } from 'components/ui/statusicon'

import styled from 'styled-components/macro'
import React from 'react'
import { FileType } from 'resources/files'

type FileProps = {
  item: FileType
  removeFile: (id: string, e: React.MouseEvent) => void
  handleActiveType: (id: string, e: React.MouseEvent) => void,
  
}

function File(props: FileProps) {
  return (
    <FileWrapper
      key={props.item.id}
      onClick={(e: React.MouseEvent) => {
        props.handleActiveType(props.item.id, e)
      }}
    >
      {props.item.active ? <ActiveFile /> : <InactiveFile />}
      <FileTitle href={`/file/${props.item.id}`}>{props.item.name}</FileTitle>
      {props.item.active && (
        <StatusIcon
          status={props.item.status}
          className={
            props.item.status === 'saving' ? 'absolute--saving' : 'absolute'
          }
        />
      )}
      {!props.item.active && (
        <RemoveButton
          onClick={(e) => {
            props.removeFile(props.item.id, e)
          }}
          title={`Remover o arquivo ${props.item.name}`}
        >
          {' '}
          +{' '}
        </RemoveButton>
      )}
    </FileWrapper>
  )
}

const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`

const RemoveButton = styled(Button)`
  display: none;
  transform: translateY(-50%) rotate(45deg);
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 5;
`

const FileWrapper = styled.div`
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

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);

    ${RemoveButton} {
      display: block;
    }
  }

  & .absolute {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);

    &--saving {
      position: absolute;
      right: 18px;
      top: unset;
      transform: translateY(-50%);
    }
  }
`

const FileTitle = styled.a`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  height: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

export { File }
