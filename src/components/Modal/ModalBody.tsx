import React from 'react';

interface ModalBodyProps {
}

export const ModalBody: React.FC<ModalBodyProps> = ({children}) => {
    return (
        <>{children}</>
    )
}