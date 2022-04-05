import {Disclosure, Menu, Transition } from "@headlessui/react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { HiOutlineBell, HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import {Navbar, NavbarLeftColumn, NavbarLogo, NavbarMenu, NavbarMenuItem, NavbarRightColumn, DropdownItem, Dropdown} from '../src'

const metaNavbar: ComponentMeta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: {
            control: {type: 'color'}
        },
        hoverBackgroundColor: {
            control: {type: 'color'}
        },
        textColor: {
            control: {type: 'color'}
        },
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, Wheat, RosyBrown);` },
            ],
        },
    },
}

export default metaNavbar;

const Template: ComponentStory<typeof Navbar> = args => {
    return (
        <Navbar {...args}>
            <NavbarLeftColumn>
                <NavbarLogo
                    imgUrl="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    imgAlt="Workflow"
                />
            </NavbarLeftColumn>

            <NavbarMenu>
                <NavbarMenuItem hoverBackgroundColor={args.hoverBackgroundColor} textColor={args.textColor}>
                    <a
                        key={1}
                        href={'#'}
                        className={
                            `px-3 py-2 rounded-md text-sm font-medium`
                        }
                    >
                        Dashboard
                    </a>
                </NavbarMenuItem>
                <NavbarMenuItem hoverBackgroundColor={args.hoverBackgroundColor} textColor={args.textColor}>
                    <a
                        key={2}
                        href={'#'}
                        className={
                            `px-3 py-2 rounded-md text-sm font-medium`
                        }
                    >
                        Team
                    </a>
                </NavbarMenuItem>
                <NavbarMenuItem hoverBackgroundColor={args.hoverBackgroundColor} textColor={args.textColor}>
                    <a
                        key={3}
                        href={'#'}
                        className={
                            `px-3 py-2 rounded-md text-sm font-medium`
                        }
                    >
                        Projects
                    </a>
                </NavbarMenuItem>
                <NavbarMenuItem hoverBackgroundColor={args.hoverBackgroundColor} textColor={args.textColor}>
                    <Dropdown
                        backgroundColor="transparent"
                        border="0px"
                        title="Dropdown"
                        titleColor={args.textColor}
                        hoverColor={args.hoverBackgroundColor}
                        backgroundColorDropdownItemContainer={args.backgroundColor}
                        className="px-[12px]"
                    >
                        <DropdownItem listItemTextColor={args.textColor} listItemHoverColor={args.hoverBackgroundColor}>
                            Option 1
                        </DropdownItem>
                        <DropdownItem listItemTextColor={args.textColor} listItemHoverColor={args.hoverBackgroundColor}>
                            Option 2
                        </DropdownItem>
                    </Dropdown>
                </NavbarMenuItem>
            </NavbarMenu>

            <NavbarRightColumn>
                <button
                    type="button"
                    className="p-1 text-gray-400 hover:text-white"
                >
                    <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                </button>
            </NavbarRightColumn>

        </Navbar>
    )
}

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
    backgroundColor: '#1f2937',
    hoverBackgroundColor: '#374151',
    textColor: 'white',
};