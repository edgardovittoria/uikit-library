import React, { SyntheticEvent } from 'react';

import {Spinner} from '../../index';

export interface ButtonProps  {
    textColor?: string,
    backgroundColor?: string,
    border?: string,
    text: string,
    icon?: JSX.Element,
    loading?: boolean,
    loadingColor?: string,
    loadingSize?: 'small'|'medium'|'large',
    width?: 'small'|'medium'|'large'|'full',
    className?: string,
    disabled?: boolean,
    /*inverted?: boolean,
    expanded?: boolean,
    pressed?: boolean,
    tabIndex?: number,*/
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}

export const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { textColor, backgroundColor, border, text, loading = false, className = '',
    disabled = false, onClick, onKeydown, icon, loadingColor, loadingSize = 'medium', width = 'small' } = props;

    let size = '150px'

    switch (width) {
        case 'small':
            size = 'max-content'
            break
        case 'medium':
            size = '200px'
            break
        case 'large':
            size = '300px'
            break
        case 'full':
            size = '100%'
            break
        default:
            break
    }

    return (
        <button
        className={`
        flex relative rounded-md px-3 py-[4px] items-center justify-center text-lg
        ${className}
        ${disabled || loading ? 'opacity-40 hover:opacity-40' : 'hover:opacity-70'}
        `}
        style={{color: textColor, backgroundColor: backgroundColor, border: border, width: size}}
        disabled={disabled ? disabled : false} 
        onClick={(e) => {
            if (onClick) {
                onClick(e)
                e.stopPropagation()
            }
        }}
        onKeyDown={onKeydown}
        >
            {
                loading && (
                    <Spinner className='absolute ml-auto mr-auto left-0 right-0'
                             color={loadingColor}
                             size={loadingSize}
                    />
                )
            }
            {
                icon && (<div className={text !== '' ? 'mr-2' : ''}>{icon}</div>)
            }
            {text}
        </button>
    )
}
