import React from 'react';

export interface CardHeaderProps {
    title: string;
    titleColor?: string;
    titleFontSize?: string;
    titleFontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    separatorHeader?: boolean;
    separatorHeaderColor?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {

    const {title, titleColor, titleFontSize, titleFontWeight, separatorHeader, separatorHeaderColor} = props

    return(
        <div className='mb-5'>
            <h1 className='m-0' style={{color: titleColor, fontSize: titleFontSize, fontWeight: titleFontWeight}}>{title}</h1>
            {separatorHeader && <hr style={{marginTop: '15px', borderTop: `1px solid ${separatorHeaderColor}`}}/>}
        </div>
    )

}

