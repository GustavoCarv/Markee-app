import styled, { css } from 'styled-components/macro'


function App() {
  return <Title>Oi</Title>
}

const Title = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    font-size: 2rem;
    color: ${theme.colors.black};
  `}
`


export { App }
