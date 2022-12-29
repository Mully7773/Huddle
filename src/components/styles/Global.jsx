import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap');

    :root {
        --font-primary: 'Poppins', sans-serif;
        --font-secondary: 'Open Sans', sans-serif;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: var(--font-primary);
        line-height: 1.6;
        font-weight: 300;
    }
`;

export default GlobalStyles;
