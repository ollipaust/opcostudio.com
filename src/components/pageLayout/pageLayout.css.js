import { createGlobalStyle } from 'styled-components'

export const PageLayoutStyles = createGlobalStyle`

body.home {

}
body.about {

    .portrait-container {
        
        img {
            width: 1200px;
            transform: scale(1) translateX(-25%);
            transition: transform 500ms ease;
            cursor: grab;

            &:hover {
               transform: scale(1.05) translateX(-25%);
               transform-origin: center;
               transition: transform 500ms ease;
            }
        }
    }
  
}
body.work {

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
