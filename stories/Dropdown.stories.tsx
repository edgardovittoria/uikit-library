import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Dropdown, DropdownItem} from "../src";

const metaDropdown: ComponentMeta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        hoverColor: {
            control: {type: 'color'}
        }
    }
}

export default metaDropdown;

const Template: ComponentStory<typeof Dropdown> = args => {
    return(
        <Dropdown {...args}>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
        </Dropdown>
    )
}

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
    title: 'Dropdown',
};

