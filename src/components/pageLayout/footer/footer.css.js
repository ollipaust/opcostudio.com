import styled from 'styled-components'
import { accent, light, light33, dark, dark33, darkest } from 'constants/colors'

export const Container = styled.footer.withConfig({
  displayName: 'FooterFlexBox',
})`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${light};
  box-sizing: border-box;
  background-color: ${darkest};

  > .footerWaves {
    position: absolute;
    top: -60px;
    z-index: 0;
  }
`
