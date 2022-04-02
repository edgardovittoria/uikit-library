import {FC, Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {HiOutlineSelector, HiCheck} from 'react-icons/hi'
import React from 'react'

export interface SelectProps {
    options: string[],
    borderSize?: string,
    borderColor?: string,
    textColor?: string,
    optionHoverColor?: string,
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = (props) => {

    const {options, borderSize, borderColor, textColor, optionHoverColor, onChange} = props

    const [selected, setSelected] = useState(options[0])
    const [optionHovered, setOptionHovered] = useState(-1);

    return (
        <div className="w-72">
            <Listbox value={selected} onChange={(value) => {
                setSelected(value)
                setOptionHovered(-1)
                if (onChange) {
                    onChange(value)
                }
            }}>
                <div className="relative mt-1 rounded-md">
                    <Listbox.Button
                        style={{border: `${borderSize} solid ${borderColor}`}}
                        className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate" style={{color: textColor}}>{selected}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiOutlineSelector
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option, index) => {
                                return(
                                    <Listbox.Option
                                        key={index}
                                        className={'cursor-default select-none relative py-2 pl-10 pr-4'}
                                        value={option}
                                        style={
                                            {
                                                backgroundColor: (optionHovered === index) ? optionHoverColor : '',

                                            }
                                        }
                                    >
                                        {({selected, active}) => {
                                            if (active) {
                                                setOptionHovered(index)
                                            }
                                            return (
                                                <>
                                          <span
                                              className={`block truncate ${
                                                  selected ? 'font-medium' : 'font-normal'
                                              }`}
                                              style={{color: (active) ? 'white' : textColor}}
                                          >
                                            {option}
                                          </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <HiCheck className="w-5 h-5" aria-hidden="true" color={(selected && active) ? 'white' : optionHoverColor}/>
                                                    </span>
                                                    ) : null}
                                                </>
                                            )
                                        }}
                                    </Listbox.Option>
                                )
                            })}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
