import {Meta, Story} from '@storybook/react';
import {Codeblock} from "../src";

const meta: Meta = {
    title: 'Welcome',
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: {expanded: true},
    },
};

export default meta;

const Template: Story = () => {
    return (
        <div className='block text-left max-w-2xl m-auto'>
            <h1>Installing the Kit</h1>
            <h3>A little bit of information on installing our UI Kit</h3>
            <hr/>
            <h5 className='mb-3'>1) Install the npm package</h5>
            <Codeblock className='mb-3' children={`npm install uikit-library-ev`}/>
            <h5 className='mb-3'>2) Install and configure TailwindCSS</h5>
            <ul>
                <li>
                     For the installation follow the <a className='text-blue-500 hover:underline' target='_blank' href="https://tailwindcss.com/docs/guides/create-react-app">Official Guide</a> on the Tailwind Web Site.
                </li>
                <li>
                    Replace the content of your <span className='font-semibold'>tailwind.config.js</span> with:
                    <Codeblock className='mt-3'
                               children={'module.exports = {\n' +
                               '  content: [\n' +
                               '    "./src/**/*.{js,jsx,ts,tsx}",\n' +
                               '    "./node_modules/uikit-library-ev/**/*.{js,jsx,ts,tsx}",\n' +
                               '  ],\n' +
                               '  theme: {\n' +
                               '    extend: {},\n' +
                               '  },\n' +
                               '  plugins: [],\n' +
                               '}'}
                    />
                </li>
            </ul>
            <h1 className='mt-5'>Additional Information</h1>
            <hr/>
            <p className='mb-3'>- Node version : 14.17.0</p>
            <p className='mb-3'>- React version : {'>'}= 16</p>
        </div>
    )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Installation = Template.bind({});

Installation.args = {};
