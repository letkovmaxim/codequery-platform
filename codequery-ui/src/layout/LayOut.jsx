import React, {useEffect, useState} from 'react';
import Footer from "./footer/Footer.jsx";
import {Box} from "@mui/material";
import Header from "./header/Header.jsx";

const Layout = ({children}) => {
    function useWindowDimensions() {
        const [height, setHeight] = useState(window.innerHeight - 128);

        const updateWidthAndHeight = () => {
            setHeight(window.innerHeight - 128);
        }

        useEffect(() => {
            window.addEventListener("resize", updateWidthAndHeight);
            return () => window.removeEventListener("resize", updateWidthAndHeight);
        });

        return {height}
    }

    const height = useWindowDimensions()

    return (
        <div>
            <Header/>
            <Box sx={{
                width: '100%',
                height: height,
                marginTop: '64px',
            }}>
                {children}
            </Box>
            <Footer/>
        </div>
    );
};

export default Layout;
