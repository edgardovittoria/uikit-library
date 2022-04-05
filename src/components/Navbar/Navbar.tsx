import React, { FC } from 'react'

import { Disclosure } from '@headlessui/react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi'
import {NavbarMenuItemProps} from '../Navbar/NavbarMenuItem'
import {NavbarLogoProps } from './NavbarLogo'
import { NavbarLeftColumn } from './NavbarLeftColumn'
import { NavbarMenu } from './NavbarMenu'
import { NavbarRightColumn } from './NavbarRightColumn'

export type NavbarProps  = {
    children?: React.ReactElement<NavbarMenuItemProps | NavbarLogoProps>[],
    backgroundColor?: string,
    className?: string
}&NavbarMenuItemProps


export const Navbar: FC<NavbarProps> = (props)  => {

    const {children, backgroundColor, className} = props

    let navbarLeft = children && children.filter(child => (child.type as typeof NavbarLeftColumn).displayName === NavbarLeftColumn.displayName)
    let navbarMenu = children && children.filter(child => (child.type as typeof NavbarMenu).displayName === NavbarMenu.displayName)
    let navbarRight = children && children.filter(child => (child.type as typeof NavbarRightColumn).displayName === NavbarRightColumn.displayName)


    return (
        <Disclosure as="nav" style={{backgroundColor: backgroundColor}} className={className}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-10 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {navbarLeft}
                            <div className='flex items-center justify-center sm:items-stretch sm:justify-center'>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navbarMenu}
                                    </div>
                                </div>
                            </div>
                            {navbarRight}
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 inline-grid">
                            {navbarMenu}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}