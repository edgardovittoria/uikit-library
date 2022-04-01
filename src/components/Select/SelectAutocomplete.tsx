import React, {FC} from 'react'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {HiOutlineSelector, HiCheck} from 'react-icons/hi'

export interface SelectAutocompleteProps {
    options: string[],
    borderSize?: string,
    borderColor?: string,
    textColor?: string,
    optionHoverColor?: string,
    onChange?: (value: string | number) => void
}

export const SelectAutocomplete: FC<SelectAutocompleteProps> = (props) => {

    const { options, borderSize, borderColor, textColor, optionHoverColor, onChange} = props

    const [selected, setSelected] = useState(options[0])
    const [query, setQuery] = useState('')
    const [optionHovered, setOptionHovered] = useState(-1);


    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) =>
                option
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className="w-72 fixed">
            <Combobox value={selected} onChange={(value) => {
                setSelected(value)
                setOptionHovered(-1)
                if (onChange) {
                    onChange(value)
                }
            }}>
                <div className="relative mt-1">
                    <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden"
                         style={{border: `${borderSize} solid ${borderColor}`}}
                    >
                        <Combobox.Input
                            className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                            displayValue={(option: string) => option}
                            onChange={(event) => setQuery(event.target.value)}

                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiOutlineSelector
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredOptions.length === 0 && query !== '' ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredOptions.map((option, index) => (
                                    <Combobox.Option
                                        key={index}
                                        className='cursor-default select-none relative py-2 pl-10 pr-4'
                                        value={option}
                                        style={
                                            {
                                                backgroundColor: (optionHovered === index) ? optionHoverColor : '',

                                            }
                                        }
                                    >
                                        {({ selected, active }) => {
                                            if (active) {
                                                setOptionHovered(index)
                                            }
                                            return(
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
                                                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                                        <HiCheck className="w-5 h-5" aria-hidden="true" color={(selected && active) ? 'white' : optionHoverColor}/>
                                                      </span>
                                                    ) : null}
                                                </>
                                            )
                                        }}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
