import styled from 'styled-components/macro'

export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`

export const RemoveButton = styled(Button)`
  display: none;
  transform: translateY(-50%) rotate(45deg);
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 5;
`

export const FileWrapper = styled.div`
  cursor: pointer;
  margin-block: 12px;

  position: relative;
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding-left: 10px;
  border-radius: 3.4px;

  transition: 0.3s all linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    filter: brightness(150%) ;

    ${RemoveButton} {
      display: block;
    }
  }

  & .absolute {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);

    &--saving {
      position: absolute;
      right: 18px;
      top: unset;
      transform: translateY(-50%);
    }
  }
`

export const FileTitle = styled.a`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  height: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
`