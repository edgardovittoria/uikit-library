import React from 'react';

export type NavbarRightColumnProps = {
}

export const NavbarRightColumn: React.FC<NavbarRightColumnProps> = ({children}) => {
    return(
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {children}
        </div>
    )

}