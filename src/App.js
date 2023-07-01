import React, { useState } from "react";
import { GlobalStyle } from "./globalStyle.js";
import List from "./containers/List";
import TopBar from "./containers/TopBar";
import { ThemeProvider } from "styled-components";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const theme = {};
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>
                <TopBar isDark={isDark} setIsDark={setIsDark}/>
                <List />
            </div>
        </ThemeProvider>
    );
}
 
export default App;
