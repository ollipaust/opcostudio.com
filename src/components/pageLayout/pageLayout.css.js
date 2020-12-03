import { createGlobalStyle } from 'styled-components'
import { light, dark75, dark33 } from 'constants/colors'

export const PageLayoutStyles = createGlobalStyle`
.flexbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;

    > .intro {
        width: 60%;
        margin-left: 7.5vw;
    }
}


body.home {
    
    .threeCanvas {
        position: absolute!important;
        top: 50%;
        left: 50%;
        width: 100%!important;
        height: 100%!important;
        transform: translateX(-50%) translateY(-50%)!important;

            > canvas {
                pointer-events: all!important;
            }
    }

    .heroBtn1 {
        margin-right: 2rem;

        @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
            margin-right: 0;
         }
      }
      
    .heroBtn1, .heroBtn2 { display: inline-flex; }

    [class*='LogoDark'] {
        svg {
            .a {
                fill: ${dark75};
            }
        }
    }
    [class*='MenuLines'] {
        background: ${dark75};
            ::before, ::after { background: ${dark75}; }
    }
    [class*='MenuButton'] {
        &.active {
            [class*='MenuLines'] {
                background: ${light}!important;
                  ::before, ::after { background: ${light}!important; }
            }
        }
    }
}
body.about {

}
body.projects {

}
body.stack {

}

body.contact {
    input {
        width: 50%;
        height: 50px;
        background: transparent;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: none;
        border-right: none;
            :focus {
                outline: none;
     
            }
    }
    textarea {
        width: 50%;
        height: 350px;
        background: transparent;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: 2px solid black;
        border-right: none;
            :focus {
                outline: none;
            }
    }
}
`
