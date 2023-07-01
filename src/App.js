import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle.js";
import Home from "./pages/Home/index.js";
import CountryDetails from "./pages/CountryDetails/index.js";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const theme = {};
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                isDark={isDark}
                                setIsDark={setIsDark}
                            />
                        }
                    />
                    <Route
                        path="/country/:alpha3Code"
                        element={
                            <CountryDetails
                                isDark={isDark}
                                setIsDark={setIsDark}
                            />
                        }
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}
 
export default App;
