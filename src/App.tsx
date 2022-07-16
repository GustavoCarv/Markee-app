import styled from 'styled-components/macro'

import { SideBar } from 'components/sidebar/sideBar'
import { Textarea } from 'components/textarea'

function App () {
  return (
    <MainContainer>
      <SideBar />
      <Textarea />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height:100vh ;
  display: grid;
  grid-template-columns: 332px 1fr;

  overflow: hidden ;
`

export { App }
