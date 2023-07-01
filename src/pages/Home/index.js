import React from "react";
import List from "../../containers/List";
import TopBar from "../../containers/TopBar";

const Home = ({ isDark, setIsDark }) => {
    return (
        <>
            <TopBar isDark={isDark} setIsDark={setIsDark}/>
            <List />
        </>
    );
}
 
export default Home;
