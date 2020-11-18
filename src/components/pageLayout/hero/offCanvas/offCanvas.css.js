import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const OffCanvasContainer = styled.div.withConfig({
  displayName: 'OffCanvasContainer',
})`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${MEDIA.PHONE &&
    MEDIA.TABLET`
  display: none;
  `}
`
export const OffCanvasBody = styled.div.withConfig({
  displayName: 'OffCanvas',
})`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`
