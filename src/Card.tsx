import React, {SyntheticEvent} from 'react';
import {CardHeaderProps} from "./CardHeader";
import {CardFooterProps} from "./CardFooter";
import {CardBodyImageProps} from "./CardBodyImage";
import {CardBodyTextProps} from "./CardBodyText";

export type CardProps = {
    shadow?: boolean;
    borderSize?: string;
    borderColor?: string;
    onClick?: (e: SyntheticEvent<HTMLDivElement>) => void;
    hoverEffect?: 'zoom';
    width?: string;
    backgroundColor?: string;
}&CardHeaderProps&CardFooterProps&CardBodyImageProps&CardBodyTextProps

export const Card: React.FunctionComponent<CardProps> = (props) => {

    const {children, shadow, borderSize, borderColor, onClick, hoverEffect = '', width = '300px', backgroundColor} = props

    return (
        <div className={
                `relative top-0 rounded-md p-6 max-w-lg
                 ${shadow ? 'shadow-lg' : ''} 
                 ${hoverEffect === 'zoom' ? 'hover:scale-105 transition-transform duration-500' : 'transition-transform duration-500'}`
             }
             style={{border: `${borderSize} solid ${borderColor}`, width: width, backgroundColor: backgroundColor}}
             onClick={onClick}
        >
            {children}
        </div>
    )
}
