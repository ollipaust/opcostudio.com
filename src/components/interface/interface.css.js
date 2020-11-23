import styled, { createGlobalStyle } from 'styled-components'
import { light, dark33, dark75, accent } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const ScrollbarStyles = createGlobalStyle`
[data-scrollbar] {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
}
.scrollbar-track-x {
  display: none;
}
.scrollbar-track .scrollbar-thumb {
  background: ${accent};
  transition: background linear;

}
.scrollbar-track-y, .scrollbar-thumb {
  width: 6px!important;
}
@media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
  .scrollbar-track-y, .scrollbar-thumb {
    width: 3px!important;
  }
}
`

export const MainView = styled.main.withConfig({
  displayName: 'AppView',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`

export const UnsortedStyles = createGlobalStyle`

`
