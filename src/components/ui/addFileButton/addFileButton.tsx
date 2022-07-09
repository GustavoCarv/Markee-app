import styled, { css } from 'styled-components/macro'

function AddFileButton() {
  return (
    <Button>
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66663 1V10.3333"
          stroke="#293445"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 5.66669H10.3333"
          stroke="#293445"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Adicionar arquivo
    </Button>
  )
}

const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    margin-top: 25px;
    width: 100%;
    border-radius: 3.4px ;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};
    padding-block: 0.5rem;
    font-size: 13.5px;
    line-height: 1;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    gap: 12px ;

    svg {
        height:17px ;
    }
  `}
`

export { AddFileButton }
