import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        position: relative;
        font-family: Nunito Sans;
    }

    html,
    body,
    #root {
        height: 100%;
        min-width: 100%;
        font-size: 16px;
    }
`;