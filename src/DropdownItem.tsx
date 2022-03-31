import React, {FC, SyntheticEvent} from 'react';
import {Menu} from "@headlessui/react";

export interface DropdownItemProps {
    listItemHoverColor?: string;
    listItemTextColor?: string;
    listItemTextFontSize?: string;
    listItemTextFontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    onClick?: (e: SyntheticEvent<HTMLSpanElement>) => void;
    className?: string;
}

export const DropdownItem: FC<DropdownItemProps> = (props) => {

    const {children, listItemHoverColor = '#f3f4f6', listItemTextFontWeight, listItemTextColor, listItemTextFontSize, className, onClick} = props

    return (
        <Menu.Item>
            {({active}) => (
                <span
                    className={`block px-4 py-2 text-sm ${className}`}
                    style={{color: listItemTextColor, fontSize: listItemTextFontSize, fontWeight: listItemTextFontWeight, backgroundColor: active ? listItemHoverColor: ''}}
                    onClick={(e) => onClick ? onClick(e) : undefined}
                >
                             {children}
                </span>
            )}
        </Menu.Item>
    )

}