import styled, { createGlobalStyle } from 'styled-components'
import { accent, light, darker2, glass, darker } from 'constants/colors'

export const PageLayoutStyles = createGlobalStyle`
body.about {

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

    [class*='ContentContainer'] {
        
        .caption {
            text-align: center;
            color: ${darker};
            margin-top: 0.5rem;
        
            > span {
              font-size: 0.75rem !important;
            }
        }

        [class*='LogoSvg'] svg {
            width: 500px;
        }
        [class*='PortraitWrapper'] {
            width: 50%;

                [class*='CanvasWrap'] { 
                    height: calc(100vh - 5rem); 
                    width: 100%;
                }
        }


        .parent {
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            }
            
            .div1 { grid-area: 1 / 1 / 2 / 2; }
            .div2 { grid-area: 1 / 2 / 2 / 3; }
    }
}
body.portfolio {

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
export const IndexLayoutStyles = createGlobalStyle`
body.home {

    .heroBtn1, .heroBtn2 { display: inline-flex; }

    [class*='LogoDark'] {
        svg {
            .a {
                fill: ${darker2};
            }
        }
    }
    [class*='MenuLines'] {
        background: ${darker2};
            ::before, ::after { background: ${darker2}; }
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
`
