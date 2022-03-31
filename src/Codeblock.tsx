import React, {FC} from 'react';

export interface CodeblockProps {
    className?: string;
    children: any;
    style?: 'light' | 'dark';
}

export const Codeblock: FC<CodeblockProps> = (props: CodeblockProps) => {
    const {className = '', children = '', style = 'light'} = props;

    let light: string = 'bg-gray-200 text-black';
    let dark: string = 'bg-black text-green-400'

    return (
        <pre className={`p-5 rounded-md mr-5 ${style === 'light' ? light : dark} ${className}`}>
            <code>
                {children}
            </code>
        </pre>
    )
}
