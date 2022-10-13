const variables = {
  flexSet: (justify = "center", align = "center") => `
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
    `,
};

export default variables;
