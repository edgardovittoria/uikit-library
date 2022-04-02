import { Tab } from '@headlessui/react';
import React from 'react';

export type TabPanelsProps = {}


export const TabPanels: React.FC<TabPanelsProps> = (props) => {
    
    const {children} = props
    
    return(
        <Tab.Panels className='mt-2'>
            {children}
        </Tab.Panels>
    )

}