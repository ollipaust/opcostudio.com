import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import * as color from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'BrowserNotice',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin: 0.5rem 0;

  p,
  span {
    text-align: center;
    text-shadow: 1px 1px 1px ${color.dark75};
    color: ${color.light};
  }

  button {
    display: inline-block;
    font-weight: 600;
    color: ${color.light};
    background: transparent;
    border: 1px solid ${color.light};
    outline: 0;
    margin-left: 1rem;

    &:hover,
    &:active {
      border: 1px solid ${color.dark75};
      color: ${color.dark75};
    }
  }
`
