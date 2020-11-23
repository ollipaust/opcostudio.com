import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, light, dark, dark75 } from 'constants/colors'

export const PortraitWrapper = styled.section.withConfig({
  displayName: 'PortraitWrapper',
})`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${MEDIA.TABLET`
  width: 100vw;
  `}
`

export const CanvasWrapper = styled.div.withConfig({
  displayName: 'CanvasWrap',
})`
  position: relative;
  overflow: hidden;
  pointer-events: all;
`
export const CanvasContainer = styled.div.withConfig({
  displayName: 'CanvasContainer',
})`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`
