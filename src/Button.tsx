import React, { SyntheticEvent } from 'react';

import {Loading} from '../src';

export interface ButtonProps  {
    textColor?: string,
    backgroundColor?: string,
    border?: string,
    text: string,
    label: string,
    icon?: JSX.Element,
    loading?: boolean,
    loadingColor?: string,
    loadingSize?: 'small'|'medium'|'large',
    className?: string,
    disabled?: boolean,
    inverted?: boolean,
    expanded?: boolean,
    pressed?: boolean,
    tabIndex?: number,
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}

export const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { textColor, backgroundColor, border, text, label, loading = false, className = '',
    disabled = false, inverted, expanded = false, pressed = false, 
    tabIndex = 0, onClick, onKeydown, icon, loadingColor, loadingSize = 'medium' } = props;

    return (
        <button
        className={`
        flex relative rounded-md px-4 py-2 items-center
        ${className}
        ${disabled || loading ? 'opacity-40 hover:opacity-40' : 'hover:opacity-70'}
        ${inverted ? 'bg-transparent' : ''}
        `}
        style={{color: textColor, backgroundColor: backgroundColor, border: border}}
        disabled={disabled ? disabled : false} 
        aria-label={label}
        aria-expanded={expanded}
        aria-pressed={pressed}
        tabIndex={tabIndex}
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
                    <Loading className='absolute ml-auto mr-auto left-0 right-0'
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
