import { AddFileButton } from 'components/ui/addFileButton'
import { FileList } from './components/files'
import MarkeeLogo from '../../assets/logo192.png'

import * as S from './sidebar-styles'
import { FileType } from 'resources/files'
import React from 'react'

type SidebarProps = {
  files: FileType[]
  createNewFile: () => void
  handleActiveType: (id: string, e: React.MouseEvent) => void
  removeFile: (id: string, e: React.MouseEvent) => void
}

function SideBar ({
  files,
  handleActiveType,
  removeFile,
  createNewFile,
}: SidebarProps) {
  return (
    <S.Aside>
      <S.LogoContainer>
        <S.LogoImage
          src={MarkeeLogo}
          alt='Markee Logo'
          width={40}
          height={50}
        />
        <S.Title>
          markee<span>.</span>
        </S.Title>
      </S.LogoContainer>
      <S.Container>
        <S.SectionName>Arquivos</S.SectionName>
        <AddFileButton createNewFile={createNewFile} />
        <FileList
          files={files}
          handleActiveType={handleActiveType}
          removeFile={removeFile}
        />
      </S.Container>
    </S.Aside>
  )
}

export { SideBar }
