import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    z-index:  1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 2rem;
    width: 50%;
`;

export default function Modal({ children }) {
    const [showing, setShowing] = useState(false)

    return (
        <>
            <button onClick={() => setShowing(true)}>Show Modal</button>
            {showing && (
                <ModalBackground onClick={() => setShowing(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShowing(false)}>X</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}
