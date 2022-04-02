import React, {FC} from 'react'
import { Tab } from '@headlessui/react'
import { TabListProps } from './TabList'
import { TabPanelsProps } from './TabPanels'
import { TabPanelProps } from './TabPanel'



export interface TabsDetails {
    id: number,
    name: string
}

export type TabsProps = {
    classNameTabContainer?: string
}&TabListProps&TabPanelsProps&TabPanelProps

export const Tabs: FC<TabsProps> = (props) => {

    const {children, classNameTabContainer} = props

    return (
        <div className={`w-full px-2 sm:px-0 ${classNameTabContainer}`}>
            <Tab.Group>
                {children}
            </Tab.Group>
        </div>
    )
}
