import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Codeblock} from "../src";

const metaCodeblock: ComponentMeta<typeof Codeblock> = {
    title: 'Components/Codeblock',
    component: Codeblock
}

export default metaCodeblock;

const Template: ComponentStory<typeof Codeblock> = args => <Codeblock {...args}/>

export const DefaultCodeblock = Template.bind({});
DefaultCodeblock.args = {
    children: "$npm install"
};