import { createGlobalStyle } from 'styled-components'
import { light, dark75 } from 'constants/colors'

export const PageLayoutStyles = createGlobalStyle`

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

    .portrait-container {
        width: 60vw;
        max-height: 35vw;
        overflow: hidden;
        margin-top: 50px;
        
        img {
            width: 100%;
            transform: scale(1);
            transition: transform 500ms ease;
            cursor: grab;

            &:hover {
               transform: scale(1.15);
               transform-origin: center;
               transition: transform 500ms ease;
            }
        }
    }
  
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
