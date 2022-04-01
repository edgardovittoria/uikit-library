import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Button} from "../src";

const metaButton: ComponentMeta<typeof Button> = {
    title: 'Components/Button',
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
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, white, indigo);` },
            ],
        },
    },
}

export default metaButton;

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    text: 'Button',
    label: 'Button',
    backgroundColor: 'transparent',
    border: '2px solid indigo',
    textColor: 'indigo'
};