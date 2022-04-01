import React from 'react';

export interface CardFooterProps {
    separatorFooter?: boolean;
    separatorFooterColor?: string;
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {

    const {children, separatorFooter, separatorFooterColor} = props

    return(
        <div>
            {separatorFooter && <hr style={{color: separatorFooterColor, marginBottom: '15px'}}/>}
            {children}
        </div>
    )

}