
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Card, CardBodyImage, CardHeader} from "../src";

const metaCardImage: ComponentMeta<typeof Card> = {
    title: 'Components/Card with image body',
    component: Card,
    argTypes: {
        textColor: {
            table:{disable: true}
        },
        textFontSize: {
            table:{disable: true}
        },
        textFontWeight: {
            table:{disable: true}
        },
        separatorHeaderColor: {
            control: {type: 'color'}
        },
        backgroundColor: {
            control: {type: 'color'}
        },
        separatorFooter: {
            table:{disable: true}
        },
        separatorFooterColor: {
            table:{disable: true}
        },
        titleColor: {
            control: {type: 'color'}
        },
        borderColor: {
            control: {type: 'color'}
        },
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, violet, pink);` },
            ],
        },
    },
}

export default metaCardImage;

const Template: ComponentStory<typeof Card> = args => {
    return(
        <Card {...args}>
            <CardHeader title={args.title} separatorHeaderColor={args.separatorHeaderColor}
                        separatorHeader={args.separatorHeader} titleColor={args.titleColor}
                        titleFontWeight={args.titleFontWeight} titleFontSize={args.titleFontSize}
            />
            <CardBodyImage imageUrl={args.imageUrl} imageAlt={args.imageAlt}/>
        </Card>
    )
}

export const ImageCard = Template.bind({});
ImageCard.args = {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    title: 'Card Image',
    shadow: true,
    width: '350px',
    borderSize: '2px',
    borderColor: 'violet',
    hoverEffect: 'zoom',
    titleColor: 'violet',
    backgroundColor: 'white'
}

