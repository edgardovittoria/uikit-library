import React, {useState} from "react";

import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Modal, ModalBody, Button} from "../src";

const metaModal: ComponentMeta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        isOpen: {
            table:{disable: true}
        }
    },
    parameters: {
        backgrounds: {
            default: 'def',
            values: [
                {name: 'def', value: `linear-gradient(to right, lightskyblue, royalblue);`},
            ],
        },
    },
}

export default metaModal;

const Template: ComponentStory<typeof Modal> = args => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-[300px]'>
            <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
                <ModalBody>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lorem massa. Cras id facilisis neque. Nulla ac erat in lectus interdum tempor. Vivamus sodales sem maximus sapien lacinia lacinia et vitae leo. Nullam eros lorem, tristique in interdum ut, porta at mauris. Nam et odio auctor, dictum magna non, mattis felis. Proin ut porttitor erat.
                        </p>
                    </div>

                    <Button
                        backgroundColor="transparent"
                        border="2px solid indigo"
                        label="Close Modal"
                        onClick={() => setIsOpen(false)}
                        onKeydown={function noRefCheck() {}}
                        text="Close Modal"
                        textColor="indigo"
                        className='mt-3'
                    />
                </ModalBody>
            </Modal>
        </div>
    )

}

export const DefaultModal = Template.bind({});
DefaultModal.args = {
    modalButtonTitle: 'Open Modal',
    modalTitle: 'Modal Title',
};