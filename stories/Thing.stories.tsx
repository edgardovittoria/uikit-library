import { Meta, Story } from '@storybook/react';
import React from 'react';
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
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => {
  return(
      <div className='block text-left max-w-xl m-auto'>
        <h1 className='text-3xl font-bold mb-2'>Installing the Kit</h1>
        <p className='mb-3'>A little bit of information on installing our UI Kit</p>
        <Codeblock children={`$npm install \n$npm run storybook`}/>
      </div>
  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
