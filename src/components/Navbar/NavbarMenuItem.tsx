import React, { useState } from 'react';

export type NavbarMenuItemProps = {
    hoverBackgroundColor?: string,
    textColor?: string
}

export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({children, hoverBackgroundColor, textColor}) => {

    const [hover, setHover] = useState(false);

    return (
        <div
            className="flex rounded-md"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{backgroundColor: hover ? hoverBackgroundColor : '', color: textColor}}
        >{children}
        </div>
    )

}