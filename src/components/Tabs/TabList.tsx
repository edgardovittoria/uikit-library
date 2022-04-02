import {Tab} from '@headlessui/react';
import React, {useState} from 'react';

export interface TabListItem {
    id: number,
    name: string
}

export type TabListProps = {
    tabs: TabListItem[],
    classNameTabListContainer?: string,
    tabListContainerBackground?: string,
    tabListItemColor?: string,
    tabListItemSelectedColor?: string,
}

export const TabList: React.FC<TabListProps> = (props) => {

    const {tabs, classNameTabListContainer, tabListContainerBackground, tabListItemColor, tabListItemSelectedColor} = props

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <Tab.List
            className={`flex p-1 space-x-1 bg-green-300 rounded-xl ${classNameTabListContainer}`}
            style={{backgroundColor: tabListContainerBackground}}
        >
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    className={({selected}) =>
                        `w-full py-2.5 text-sm leading-5 font-medium rounded-lg
                                    focus:outline-none focus:ring-2 ring-offset-3 ring-white ring-opacity-60
                                    ${selected ? 'bg-white shadow' : 'hover:bg-white/[0.12] hover:text-white'}`
                    }
                    style={{color: (selectedTab.id === tab.id) ? tabListItemSelectedColor : tabListItemColor}}
                >
                    {({selected}) => {
                        if(selected){
                            setSelectedTab(tab)
                        }
                        return tab.name
                    }
                    }

                </Tab>
            ))}
        </Tab.List>
    )

}