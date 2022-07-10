import styled from 'styled-components/macro'

import { SideBar } from 'components/sidebar/sideBar'
import { Textarea } from 'components/textarea'
import { FormatedText } from 'components/formatedText'

function App() {
  return (
    <MainContainer>
      <SideBar />
      <Textarea />
      <FormatedText />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 332px repeat(2, 1fr);
`

export { App }
