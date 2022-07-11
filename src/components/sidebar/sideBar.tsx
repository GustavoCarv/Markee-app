import { AddFileButton } from 'components/ui/addFileButton'
import { FileList } from './components/files'
import MarkeeLogo from '../../assets/logo192.png'

import styled, { css } from 'styled-components/macro'

function SideBar () {
  return (
    <Aside>
      <LogoContainer>
        <LogoImage src={MarkeeLogo} alt='Markee Logo' width={40} height={50} />
        <Title>
          markee<span>.</span>
        </Title>
      </LogoContainer>
      <Container>
        <SectionName>Arquivos</SectionName>
        <AddFileButton />
        <FileList />
      </Container>
    </Aside>
  )
}

const Aside = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};

    height: inherit;

    display: flex;
    flex-direction: column;
  `}
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
`

const LogoImage = styled.img`
  object-fit: cover;
`

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    letter-spacing: -2px;
    font-size: 2.1rem;

    & span {
      color: ${theme.colors.primary};
    }
  `}
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const SectionName = styled.h2`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0px;

  ::before {
    display: block;
    content: '';
    width: 13.5px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ::after {
    display: block;
    content: '';
    width: 177px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export { SideBar }
