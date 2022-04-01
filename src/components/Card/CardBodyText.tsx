import React from 'react';

export interface CardBodyTextProps {
    textColor?: string;
    textFontSize?: string;
    textFontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const CardBodyText: React.FC<CardBodyTextProps> = (props) => {

    const {children, textColor, textFontSize = '15px', textFontWeight = 400} = props

    return(
        <div className='mb-5'>
            <p className='m-0 mt-5' style={{color: textColor, fontSize: textFontSize, fontWeight: textFontWeight }}>{children}</p>
        </div>
    )

}
