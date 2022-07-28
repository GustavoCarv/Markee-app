import styled, { css } from 'styled-components/macro'

export const Aside = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};

    height: inherit;

    display: flex;
    flex-direction: column;
  `}
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
`

export const LogoImage = styled.img`
  object-fit: cover;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    letter-spacing: -2px;
    font-size: 2.1rem;

    & span {
      color: ${theme.colors.primary};
    }
  `}
`

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const SectionName = styled.h2`
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
