import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light, darker2 } from 'constants/colors'

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
    text-shadow: 1px 1px 1px ${darker2};
    color: ${light};
  }

  button {
    display: inline-block;
    font-weight: 600;
    color: ${light};
    background: transparent;
    border: 1px solid ${light};
    outline: 0;
    margin-left: 1rem;

    &:hover,
    &:active {
      border: 1px solid ${darker2};
      color: ${darker2};
    }
  }
`
