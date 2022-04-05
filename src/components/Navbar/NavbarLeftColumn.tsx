import React from 'react';

interface NavbarLeftColumnProps {
}

export const NavbarLeftColumn: React.FC<NavbarLeftColumnProps> = ({children}) => {
    return(
        <div className="flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
                {children}
            </div>
        </div>
    )

}