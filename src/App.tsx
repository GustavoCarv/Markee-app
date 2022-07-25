import styled from 'styled-components/macro'

import { SideBar } from 'components/sidebar/sideBar'
import { Textarea } from 'components/textarea'
import { useFiles } from 'resources/files/use-files'

function App() {
  const {
    files,
    inputRef,
    createNewFile,
    removeFile,
    handleActiveType,
    handleUpdateContent,
    handleUpdateName,
  } = useFiles()

  return (
    <MainContainer>
      <SideBar
        files={files}
        removeFile={removeFile}
        handleActiveType={handleActiveType}
        createNewFile={createNewFile}
        /* inputRef={inputRef} */
      />
      <Textarea
        file={files.find((file) => file.active === true)}
        onUpdateFileName={handleUpdateName}
        onUpdateFileContent={handleUpdateContent}
        inputRef={inputRef}
      />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 332px 1fr;

  overflow: hidden;
`

export { App }
