import React from "react";

import {ComponentMeta, ComponentStory} from "@storybook/react";
import {DisclosureComponent} from "../src";

const metaDisclosure: ComponentMeta<typeof DisclosureComponent> = {
    title: 'Components/Disclosure',
    component: DisclosureComponent,
    argTypes: {
        textColor: {
            control: {type: 'color'}
        },
        backgroundColor: {
            control: {type: 'color'}
        },
        contentTextColor: {
            control: {type: 'color'}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: 'linear-gradient(to right, violet, orange);' },
            ],
        },
    },
}

export default metaDisclosure;

const Template: ComponentStory<typeof DisclosureComponent> = args => {
    return(
        <div className='h-[100px]'>
            <DisclosureComponent {...args}/>
        </div>

    )
}

export const Disclosure_Component = Template.bind({});
Disclosure_Component.args = {
    title: "Example text",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus dapibus, rhoncus sem at, placerat odio. Donec molestie quis mi ut tincidunt. Praesent in hendrerit nulla.",
    textColor: 'orange',
    backgroundColor: 'rgba(243,200,145,0.4)'
};