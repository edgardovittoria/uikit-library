import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import { Spinner } from "../src";

const metaSpinner: ComponentMeta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    }
}

export default metaSpinner;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args}/>

export const SpinnerComponent = Template.bind({});
SpinnerComponent.args = {
    spinnerType: 'spinner',
};

