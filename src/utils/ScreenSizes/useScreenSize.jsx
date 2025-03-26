import React, { useState, useEffect } from "react";

const useScreenSize = () => {
    const [ screenType, setScreenType ] = useState("desktop");
    
    const screenSizes = {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 1280,
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= screenSizes.mobile){
                setScreenType("mobile");
            } else if ( width <= screenSizes.tablet){
                setScreenType("tablet");
            } else if ( width <= screenSizes.laptop){
                setScreenType("laptop");
            }else{
                setScreenType("desktop")
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenType;
}

export default useScreenSize;

