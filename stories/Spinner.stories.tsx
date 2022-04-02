import {ComponentMeta, ComponentStory} from "@storybook/react";

import { Spinner } from "../src";

const metaSpinner: ComponentMeta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, whitesmoke, beige);` },
            ],
        },
    },
}

export default metaSpinner;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args}/>

export const SpinnerComponent = Template.bind({});
SpinnerComponent.args = {
    spinnerType: 'spinner',
};

