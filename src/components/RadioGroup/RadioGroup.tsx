import React, {FC, useState} from 'react'

import {RadioGroup} from '@headlessui/react'


export interface RadioGroupOption {
    lable: string,
    description?: string
}

export interface RadioGroupProps {
    options: RadioGroupOption[],
    selectedOptionBackgroundColor?: string,
    className?: string,
    onChange: (value: RadioGroupOption) => void
}

export const Radiogroup: FC<RadioGroupProps> = (props) => {

    const {options, selectedOptionBackgroundColor, className, onChange} = props

    const [selected, setSelected] = useState(options[0])
    const [checkedOption, setCheckedOption] = useState<RadioGroupOption>(options[0]);

    return (
        <div className="w-full px-4 py-16">
            <div className="w-full max-w-md mx-auto">
                <RadioGroup value={selected} onChange={(value: RadioGroupOption) => {
                    setSelected(value)
                    onChange(value)
                }}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                        {options.map((option) => (
                            <RadioGroup.Option
                                key={option.lable}
                                value={option}
                                className={({checked}) =>
                                    `${checked ? 'text-white bg-opacity-75' : 'bg-white'}
                                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none
                                    ${className}`
                                }
                                style={
                                    {
                                        backgroundColor: (checkedOption.lable === option.lable) ? selectedOptionBackgroundColor : '',
                                    }
                                }
                            >
                                {({checked}) => {
                                    if(checked){
                                        setCheckedOption(option)
                                    }
                                    return (
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {option.lable}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked ? 'text-sky-100' : 'text-gray-500'
                                                        }`}
                                                    >
                                                        <span>
                                                          {option.description}
                                                        </span>{' '}
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="flex-shrink-0 text-white">
                                                    <CheckIcon className="w-6 h-6"/>
                                                </div>
                                            )}
                                        </div>
                                    )
                                }}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}

function CheckIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2"/>
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
