import React from 'react';

export interface NavbarLogoProps {
    imgUrl: string,
    imgAlt?: string,
    width: string,
    height: string,
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({imgUrl, imgAlt, width, height}) => {
    return (
        <>
            <img
                className="block h-8 w-auto"
                src={imgUrl}
                alt={imgAlt}
                style={{width: width, height: height}}
            />
        </>
    )
}