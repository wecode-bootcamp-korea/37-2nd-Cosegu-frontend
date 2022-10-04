import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`    
    ${reset};

    *{
        box-sizing: border-box;
        font-family: ‘Noto Sans KR’, sans-serif;
        line-height: 1.3em;
    }

    .cotain {
        width: 1200px;
        margin: 0 auto;
    }

    .hide {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        font-size: 0;
        line-height: 0;
        text-indent: -999em;
      }

      input{
        border: 1px solid #ddd; 
        
        &:foucus{
            outline: none;
        }
      }

      button{
        border: none;
        cursor: pointer;
        background: black;
        color: white;
      }
`;

export default GlobalStyle;
