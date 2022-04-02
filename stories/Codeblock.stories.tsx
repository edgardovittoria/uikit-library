import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Codeblock} from "../src";

const metaCodeblock: ComponentMeta<typeof Codeblock> = {
    title: 'Components/Codeblock',
    component: Codeblock,
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, lightgreen, green);` },
            ],
        },
    },
}

export default metaCodeblock;

const Template: ComponentStory<typeof Codeblock> = args => <Codeblock {...args}/>

export const DefaultCodeblock = Template.bind({});
DefaultCodeblock.args = {
    children: "$npm install"
};