import React, {FC} from 'react';

import {Disclosure, Transition} from '@headlessui/react'
import {IoIosArrowDown} from "react-icons/io";

export interface DisclosureComponentProps {
    title: string,
    content: string,
    textColor?: string,
    contentTextColor?: string,
    backgroundColor?: string
}

export const DisclosureComponent: FC<DisclosureComponentProps> = (props) => {

    const {title, content, textColor = 'purple', contentTextColor , backgroundColor = 'rgba(233,188,241,0.4)'} = props

    return (
        <div className="w-full px-4">
            <div className="w-full max-w-md p-2 bg-white rounded-2xl">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                style={{color: textColor, backgroundColor: backgroundColor}}
                            >
                                <span>{title}</span>
                                <IoIosArrowDown
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-sm"
                                    style={{color: contentTextColor}}
                                >
                                    {content}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
