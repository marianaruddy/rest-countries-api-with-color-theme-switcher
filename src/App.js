import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle.js";
import Home from "./pages/Home/index.js";
import CountryDetails from "./pages/CountryDetails/index.js";

const queryClient = new QueryClient();

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const theme = {};
    return (
        <QueryClientProvider client={queryClient}>
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
                            path="/country/:cca3"
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
        </QueryClientProvider>
    );
}
 
export default App;
