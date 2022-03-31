import React from 'react';
import {
    ImSpinner, ImSpinner10, ImSpinner11,
    ImSpinner2,
    ImSpinner3,
    ImSpinner4,
    ImSpinner5,
    ImSpinner6,
    ImSpinner7,
    ImSpinner8, ImSpinner9
} from "react-icons/im";

export interface LoadingProps  {
    className?: string,
    color?: string,
    size?: 'small'|'medium'|'large',
    spinnerType?: 'spinner' | 'spinner2' | 'spinner3' | 'spinner4' | 'spinner5' | 'spinner6' | 'spinner7' | 'spinner8' | 'spinner9' | 'spinner10' | 'spinner11'
}

export const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
    const { color = 'body', size = 'small', className = '', spinnerType = 'spinner' } = props;

    let spinnerSize : number = 20;
    switch (size) {
        case 'small':
            spinnerSize = 20
            break
        case 'medium':
            spinnerSize = 30
            break
        case 'large':
            spinnerSize = 40;
            break
        default:
            break
    }

    let spinner: JSX.Element = {} as JSX.Element;

    switch (spinnerType) {
        case 'spinner':
            spinner = <ImSpinner color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner2':
            spinner = <ImSpinner2 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner3':
            spinner = <ImSpinner3 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner4':
            spinner = <ImSpinner4 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner5':
            spinner = <ImSpinner5 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner6':
            spinner = <ImSpinner6 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner7':
            spinner = <ImSpinner7 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner8':
            spinner = <ImSpinner8 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner9':
            spinner = <ImSpinner9 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner10':
            spinner = <ImSpinner10 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        case 'spinner11':
            spinner = <ImSpinner11 color={color} size={spinnerSize} className={`animate-spin ${className}`} />
            break
        default:
            break
    }

    return (
        <>
            {spinner}
        </>
    )
}
