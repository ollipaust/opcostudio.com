import { createGlobalStyle } from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const TransitionStyles = createGlobalStyle`
will-change: opacity;

[class*='AppView'] {
    &.enter {
        z-index: 1;
    }
    &.exit {
        z-index: 0;
    }
    &.enter-active {
        opacity: 0;
    }
    &.enter-done {
        opacity: 1;
        transition: opacity 300ms ease 500ms;
    }
    &.exit {
        opacity: 0;
        transition: opacity 300ms ease 0ms;
    }

}

&.enter.enter-active {
    [class*='MenuButton'],
    [class*='AppLogo'], 
    [class*='LangSwitchContainer']  {
        opacity: 0!important;
    }
} 
&.exit.exit-active {
    [class*='OverlayBackground'] {

        transform: translateX(0%) translateY(0%) scale(2);

        .bg {
            transform: translateY(-100%);
            transition: transform 400ms ease-in-out 1400ms!important;
            will-change: transform;
          }

    }
    [class*='MenuBoxLeft'] {
        pointer-events: all;
        opacity: 0;
        transform: translateY(-50%) translateZ(0);
        transition: all 500ms ease-in 0ms;
      }
      [class*='MenuBoxRight'] {
        pointer-events: all;
        opacity: 0;
        transform: translateY(-50%) translateZ(0);
        transition: all 500ms ease-in 0ms;
      }
    [class*='LogoSvgAnimated'] {
        opacity: 0!important;
        transition: opacity 500ms ease 500ms!important;
    }

    [class*='MenuButton'] {

        ${MEDIA.PHONE &&
          MEDIA.TABLET`
            top: 2.5em;
            right: 2.5em;
        `}

        span,
        span:after,
        span:before {
            transform: rotate(0) translateZ(0) scale(1)!important;
            transition: 
            top 500ms ease 0ms, 
            left 500ms ease 0ms, 
            transform 500ms  ease 0ms, 
            background-color 500ms ease 750ms!important;
        }

        [class*='MenuLines'] {
                :after {
                    left: 0;
                    top: -1.25em;
                }
                :before {
                    left: 1.4em;
                    top: 1.25em;
                }
        }
    }

    [class*='OverlayNav'] {
        ul {
            li:nth-child(1) [class*='LinkContainer'] {
                opacity: 0!important;
                transition: all 350ms ease 700ms!important;
            }
            li:nth-child(2) [class*='LinkContainer'] {
                opacity: 0!important;
                transition: all 350ms ease 600ms!important;
            }
            li:nth-child(3) [class*='LinkContainer'] {
                opacity: 0!important;
                transition: all 350ms ease 500ms!important;
            }
            li:nth-child(4) [class*='LinkContainer'] {
                opacity: 0!important;
                transition: all 350ms ease 400ms!important;
            }
            li:nth-child(5) [class*='LinkContainer'] {
                opacity: 0!important;
                transition: all 350ms ease 300ms!important;
            }
        }
    }
}
`
