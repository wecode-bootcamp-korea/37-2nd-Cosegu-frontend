import { css } from "styled-components";

const variables = {
  flexSet: (justify = "center", align = "center") => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default variables;
