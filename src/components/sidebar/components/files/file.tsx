import { ReactComponent as InactiveFile } from '../../../../assets/inactiveFile.svg'
import { ReactComponent as ActiveFile } from '../../../../assets/activeFile.svg'
import { StatusIcon } from 'components/ui/statusicon'

import * as S from './file-styles'
import React from 'react'
import { FileType } from 'resources/files'

type FileProps = {
  item: FileType
  removeFile: (id: string, e: React.MouseEvent) => void
  handleActiveType: (id: string, e: React.MouseEvent) => void,

}

function File (props: FileProps) {
  return (
    <S.FileWrapper
      key={props.item.id}
      onClick={(e: React.MouseEvent) => {
        props.handleActiveType(props.item.id, e)
      }}
    >
      {props.item.active ? <ActiveFile /> : <InactiveFile />}
      <S.FileTitle href={`/file/${props.item.id}`}>{props.item.name}</S.FileTitle>
      {props.item.active && (
        <StatusIcon
          status={props.item.status}
          className={
            props.item.status === 'saving' ? 'absolute--saving' : 'absolute'
          }
        />
      )}
      {!props.item.active && (
        <S.RemoveButton
          onClick={(e) => {
            props.removeFile(props.item.id, e)
          }}
          title={`Remover o arquivo ${props.item.name}`}
        >
          {' '}
          +{' '}
        </S.RemoveButton>
      )}
    </S.FileWrapper>
  )
}

export { File }
