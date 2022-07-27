import styled from 'styled-components/macro'

const containerMargin = '25px'
const elementsMarginTop = '42px'

export const TextareaWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  margin-block: ${containerMargin};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  gap: 12px;

  width: 100%;

  & input {
    border: none;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -1px;
    height: 25px;

    :focus {
      outline: none;
    }
  }
`

export const Text = styled.textarea`
  border: none;
  border-right: 2px rgba(30, 41, 59, 0.12) solid;
  padding-left: 26px;
  padding-right: 24px;
  padding-bottom: 24px;
  margin-top: ${elementsMarginTop};
  resize: none;
  width: 50%;
  height: calc(100vh - (2 * ${containerMargin} + ${elementsMarginTop}));
  box-sizing: border-box;
  outline: none;
  flex-grow: 1;

  font-family: Inconsolata, sans-serif;
  font-size: 1.125rem;
  color: rgba(30, 41, 59);

  ::placeholder {
    color: rgba(30, 41, 59, 0.86);
  }
`

export const Article = styled.article`
  box-sizing: border-box;
  width: 50%;
  height: calc(100vh - (2 * ${containerMargin} + ${elementsMarginTop}));
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  margin-top: ${elementsMarginTop};

  overflow: scroll;
  overflow-x: hidden;
`
