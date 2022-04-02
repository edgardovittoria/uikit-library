import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Radiogroup} from '../src'

const metaRadioGroup: ComponentMeta<typeof Radiogroup> = {
    title: 'Components/RadioGroup',
    component: Radiogroup,
    argTypes: {
        selectedOptionBackgroundColor: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, mediumspringgreen, palegreen);` },
            ],
        },
    },
}

export default metaRadioGroup;

const Template: ComponentStory<typeof Radiogroup> = args => <Radiogroup {...args}/>

export const DefaultRadioGroup = Template.bind({});
DefaultRadioGroup.args = {
    options: [
        { lable: 'Lable 1', description: 'Description 1' },
        { lable: 'Lable 2', description: 'Description 2'},
        { lable: 'Lable 3', description: 'Description 3'},
    ],
    selectedOptionBackgroundColor: 'seagreen',
    onChange: (value) => console.log(value)
};