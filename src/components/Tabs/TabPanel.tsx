import { Tab } from '@headlessui/react';
import React from 'react';

export type TabPanelProps = {
    associatedTab: number,
    classNamePanelContiner?: string

}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
    
    const { children, associatedTab, classNamePanelContiner} = props
    
    return(
        <Tab.Panel
            key={associatedTab}
            className={
                `bg-white rounded-xl p-3'
                 focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60
                 ${classNamePanelContiner}`
            }
        >
            {children}
        </Tab.Panel>
    )

}