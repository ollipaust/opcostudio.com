import styled from 'styled-components'
import { accent, accentDark, accentGradient } from 'constants/colors'

export const TriangleWrapper = styled.div.withConfig({
  displayName: 'TriangleWrapper',
})`
  position: absolute;
  z-index: -1;
  top: ${props => (props.top ? props.top : null)};
  bottom: ${props => (props.bottom ? props.bottom : null)};
  left: ${props => (props.left ? props.left : null)};
  right: ${props => (props.right ? props.right : null)};
  width: 150px;
  height: 130px;
  text-align: center;
  ${props => (props.scale ? 'transform: scale(' + props.scale + ');' : null)}

  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 130px solid
      ${props => (props.mainColor ? props.mainColor : accent)};
    /* 129.903810568 */
    transform-origin: 75px 0;
    /* perspective: 150px; */
    perspective-origin: 50% 50%;
  }
  .face-1 {
    transform-origin: 75px 0;
    transform: rotateY(0deg) rotateX(19.5deg);
    animation: color1 2s infinite linear;
    animation-delay: 0s;
  }
  .face-2 {
    transform-origin: 75px 0;
    transform: rotateY(120deg) rotateX(19.5deg);
    animation: color1 2s infinite linear;
    animation-delay: 1s;
  }
  .face-3 {
    transform-origin: 75px 0;
    transform: rotateY(240deg) rotateX(19.5deg);
    animation: color1 2s infinite linear;
    animation-delay: 0s;
  }
  .face-4 {
    /* bottom face */
    transform-origin: 0 0px;
    transform: rotateX(90deg) translateY(-87px) translateZ(-122px);
    animation: color1 2s infinite linear;
    animation-delay: 1s;
  }
  .rotor-x {
    width: 150px;
    height: 130px;
    transform-origin: 75px 65px;
    transform-style: preserve-3d;
    animation: spinX 6s infinite linear;
  }
  .rotor-y {
    width: 150px;
    height: 130px;
    transform-origin: 75px 65px;
    transform-style: preserve-3d;
    animation: spinY 12s infinite linear;
  }
  .rotor-z {
    width: 150px;
    height: 130px;
    transform-origin: 75px 65px;
    transform-style: preserve-3d;
    animation: spinZ 18s infinite linear;
  }
  @keyframes spinX {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(
        ${props => (props.rotation ? props.rotation : '360deg')}
      );
    }
  }
  @keyframes spinY {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(
        ${props => (props.rotation ? props.rotation : '360deg')}
      );
    }
  }
  @keyframes spinZ {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(
        ${props => (props.rotation ? props.rotation : '360deg')}
      );
    }
  }
  @keyframes color1 {
    0% {
      border-bottom-color: ${props =>
        props.mainColor ? props.mainColor : accent};
    }
    50% {
      border-bottom-color: ${props =>
        props.shadowColor ? props.shadowColor : accentDark};
    }
    100% {
      border-bottom-color: ${props =>
        props.mainColor ? props.mainColor : accent};
    }
  }
`
