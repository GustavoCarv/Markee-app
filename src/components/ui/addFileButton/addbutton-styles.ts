import styled, { css } from 'styled-components/macro'

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    margin-top: 25px;
    margin-bottom: 32px;
    width: 100%;
    border-radius: 3.4px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};
    padding-block: 0.5rem;
    font-size: 13.5px;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-sizing: content-box;
    border: 1px solid transparent;

    transition: 0.3s all linear;

    svg {
      height: 17px;
      transition: 0.3s all linear;
    }

    :hover {
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      svg {
        path {
            stroke: #1FC8E1;
        }
      }
    }
  `}
`
