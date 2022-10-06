import { css } from "styled-components";
import theme from "./theme";
const variables = {
  flexSet: (justify = "center", align = "center") => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default variables;
