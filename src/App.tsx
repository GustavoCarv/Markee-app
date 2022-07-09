import styled from 'styled-components/macro'

import { SideBar } from 'components/sidebar/sideBar'

function App () {
  return (
    <MainContainer>
      <SideBar />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`

export { App }
