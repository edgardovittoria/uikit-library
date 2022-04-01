import {Menu, Transition} from '@headlessui/react';
import React, {Fragment, useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";


export interface DropdownProps {
    title: JSX.Element | string;
    titleColor?: string;
    hoverColor?: string;
    titleFontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    border?: string;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {

    const {children, title, titleColor, titleFontWeight, border, className, hoverColor = "#f3f4f6"} = props
    const [dropdownHover, setDropdownHover] = useState(false);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 ${className}`}
                    style={{color: titleColor, fontWeight: titleFontWeight, border: border, backgroundColor: dropdownHover ? hoverColor : ''}}
                    onMouseOver={() => setDropdownHover(true)}
                    onMouseOut={() => setDropdownHover(false)}
                >

                    {title}
                    <IoIosArrowDown className='ml-2 my-auto'/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {children}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    )

}
