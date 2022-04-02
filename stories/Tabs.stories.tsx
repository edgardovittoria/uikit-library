import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button, Card, CardBodyText, CardFooter, CardHeader, Tabs, TabList, TabPanels, TabPanel} from '../src'


const meta: ComponentMeta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {

    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                { name: 'def', value: `linear-gradient(to right, Wheat, RosyBrown);` },
            ],
        },
    },
}

export default meta;

const Template: ComponentStory<typeof Tabs> = (args) => {
    return (
        <Tabs {...args}>
            <TabList tabs={args.tabs} {...args}/>
            <TabPanels>
                <TabPanel associatedTab={1} {...args}>
                    <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel associatedTab={2} {...args}>
                    <div className="min-h-full flex items-center rounded-lg shadow-lg justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your
                                    account</h2>
                                <p className="mt-2 text-center text-sm text-gray-600">
                                    Or{' '}
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        start your 14-day free trial
                                    </a>
                                </p>
                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true"/>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel associatedTab={3} {...args}>
                    <Card
                        backgroundColor="white"
                        onClick={() => {}}
                        shadow
                        title="Card"
                        width="350px"
                    >
                        <CardHeader title="Card" />
                        <CardBodyText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste minima excepturi maxime. Repellat ea veniam consectetur, architecto a error officiis, libero minima, temporibus sequi rem! Quasi, voluptates quaerat? Dolore.
                        </CardBodyText>
                        <CardFooter>
                            <Button
                                backgroundColor="MediumSlateBlue"
                                border="2px solid MediumSlateBlue"
                                label="Card button"
                                onClick={function noRefCheck() {}}
                                text="Find out more"
                                textColor="white"
                            />
                        </CardFooter>
                    </Card>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export const Tabs_Component = Template.bind({});
Tabs_Component.args = {
    tabs: [
        {id: 1, name: 'Tab1'},
        {id: 2, name: 'Tab2'},
        {id: 3, name: 'Tab3'},
    ],
    classNameTabContainer: 'max-w-2xl',
    tabListContainerBackground: 'MediumSlateBlue',
    tabListItemSelectedColor: 'MediumSlateBlue',
    tabListItemColor: 'white',
    classNamePanelContiner: 'p-6 flex justify-center'
};