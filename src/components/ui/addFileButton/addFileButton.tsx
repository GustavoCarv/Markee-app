import React from 'react'

import { Button } from './addbutton-styles'

type ButtonProps = {
  createNewFile: (event: React.MouseEvent) => void
}

function AddFileButton({ createNewFile }: ButtonProps) {
  return (
    <Button
      onClick={(event) => {
        createNewFile(event)
      }}
    >
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 5.66669H10.3333"
          stroke="#293445"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Adicionar arquivo
    </Button>
  )
}

export { AddFileButton }
