import React from 'react';

export interface CardBodyImageProps {
    imageUrl: string;
    imageAlt?: string;
}

export const CardBodyImage: React.FC<CardBodyImageProps> = (props) => {

    const {imageUrl, imageAlt} = props

    return(
        <div className='mb-5'>
            <img src={imageUrl} alt={imageAlt} style={{width: '100%'}}/>
        </div>
    )

}

