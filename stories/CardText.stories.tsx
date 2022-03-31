import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import { Card, CardHeader, CardFooter, CardBodyText, Button } from "../src";

const metaCard: ComponentMeta<typeof Card> = {
    title: 'Components/Card with text body',
    component: Card,
    argTypes: {
        imageAlt: {
            table:{disable: true}
        },
        imageUrl: {
            table:{disable: true}
        },
        separatorHeaderColor: {
            control: {type: 'color'}
        },
        separatorFooterColor: {
            control: {type: 'color'}
        },
        textColor: {
            control: {type: 'color'}
        },
        backgroundColor: {
            control: {type: 'color'}
        },
        titleColor: {
            control: {type: 'color'}
        },
        borderColor: {
            control: {type: 'color'}
        },
    }
}

export default metaCard;

const Template: ComponentStory<typeof Card> = args => {
    return(
        <Card {...args}>
            <CardHeader title={args.title} separatorHeaderColor={args.separatorHeaderColor}
                        separatorHeader={args.separatorHeader} titleColor={args.titleColor}
                        titleFontWeight={args.titleFontWeight} titleFontSize={args.titleFontSize}
            />
            <CardBodyText textColor={args.textColor} textFontSize={args.textFontSize} textFontWeight={args.textFontWeight}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste minima
                excepturi maxime. Repellat ea veniam consectetur, architecto a error officiis, libero minima,
                temporibus sequi rem! Quasi, voluptates quaerat? Dolore.
            </CardBodyText>
            <CardFooter separatorFooter={args.separatorFooter} separatorFooterColor={args.separatorFooterColor}>
                <Button
                    textColor='black'
                    backgroundColor={'#ddb0f4'}
                    border={'2px solid #ddb0f4'}
                    label={'Card button'}
                    text={'Find out more'}
                    onClick={() => alert('button')}
                />
            </CardFooter>
        </Card>
    )
}

export const TextCard = Template.bind({});
TextCard.args = {
    shadow: true,
    width: '400px',
    borderSize: '1px',
    borderColor: 'black',
    title: 'Card',
}

