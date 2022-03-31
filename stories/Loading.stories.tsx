import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Loading} from "../src";

const metaSpinner: ComponentMeta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    }
}

export default metaSpinner;

const Template: ComponentStory<typeof Loading> = args => <Loading {...args}/>

export const Spinner = Template.bind({});
Spinner.args = {
    spinnerType: 'spinner',
};

