import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Button} from "../src";
import {FaCube} from "react-icons/fa";

const metaIconButton: ComponentMeta<typeof Button> = {
    title: 'Components/Button with icon',
    component: Button,
    argTypes: {
        backgroundColor: {
            control: {type: 'color'}
        },
        textColor: {
            control: {type: 'color'}
        },
        loadingColor: {
            control: {type: 'color'}
        }
    }
}

export default metaIconButton;

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>

export const IconButton = Template.bind({});
IconButton.args = {
    text: '',
    border: '2px solid indigo',
    icon: <FaCube color='indigo'/>,
};