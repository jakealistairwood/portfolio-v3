import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import SocialIconsBar from "./components/SocialIconsBar/SocialIconsBar";

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <SocialIconsBar />
        </>
    );
};

export default App;
