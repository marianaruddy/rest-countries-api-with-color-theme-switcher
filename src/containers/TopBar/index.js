import React from "react";
import { TopBarWrapper, H1, DarkModeButton } from "./style";

const TopBar = ({ isDark, setIsDark }) => {
    console.log(isDark ? 'modo escuro ativado' : 'modo claro ativado')
    return (
        <TopBarWrapper>
            <H1>Where in the world?</H1>
            <DarkModeButton onClick={() => setIsDark(!isDark)}>Dark Mode</DarkModeButton>
        </TopBarWrapper>
    );
}
 
export default TopBar;
