import styled, { createGlobalStyle } from 'styled-components'
import { accent, light, darker2, lighter, darker } from 'constants/colors'

export const PageLayoutStyles = createGlobalStyle`
body.about {
    .whoList {
        max-width: 90%;
        font-size: 3rem;
        font-weight: 700;
        
            li {
                line-height: 2.5;
                color: ${darker};
                position: relative;
                span {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 50%;
                    transform: translateY(-50%);
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: ${darker2};
                    text-align: right;
                    line-height: 1.25;
                }
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
