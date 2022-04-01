import React from "react";

import {ComponentMeta, ComponentStory} from "@storybook/react";
import {SelectAutocomplete} from "../src";

const metaSelect: ComponentMeta<typeof SelectAutocomplete> = {
    title: 'Components/SelectAutocomplete',
    component: SelectAutocomplete,
    argTypes: {
        borderColor:{
            control: {type: 'color'}
        },
        optionHoverColor: {
            control: {type: 'color'}
        },
        textColor: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: 'linear-gradient(to right, lightgreen, green);' },
            ],
        },
    },
}

export default metaSelect;

const Template: ComponentStory<typeof SelectAutocomplete> = args => {
    return(
        <div className="h-[200px]">
            <SelectAutocomplete {...args}/>
        </div>

    )
}

export const Select_Autocomplete = Template.bind({});
Select_Autocomplete.args = {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    borderSize: '3px',
    borderColor: '#168409',
    optionHoverColor: '#168409'
};