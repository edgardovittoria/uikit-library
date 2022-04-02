import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Dropdown, DropdownItem} from "../src";

const metaDropdown: ComponentMeta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        hoverColor: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: 'linear-gradient(to right, orange, yellow);' },
            ],
        },
    },
}

export default metaDropdown;

const Template: ComponentStory<typeof Dropdown> = args => {
    return(
        <div className='h-[100px]'>
            <Dropdown {...args}>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
        </div>

    )
}

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
    title: 'Dropdown',
};

