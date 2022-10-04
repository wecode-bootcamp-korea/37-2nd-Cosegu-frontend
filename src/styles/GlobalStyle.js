import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`    
    ${reset};

    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';

    *{
        box-sizing: border-box;
        font-family: ‘Noto Sans KR’, sans-serif;
        line-height: 1.3em;
    }
`;

export default GlobalStyle;
