
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Select} from "../src";

const metaSelect: ComponentMeta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
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
                { name: 'def', value: 'linear-gradient(to right, lightpink, violet);' },
            ],
        },
    },
}

export default metaSelect;

const Template: ComponentStory<typeof Select> = args => {
    return(
        <div className="h-[200px]">
            <Select {...args}/>
        </div>

    )
}

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    borderSize: '3px',
    borderColor: 'violet',
    optionHoverColor: '#dab6da'
};