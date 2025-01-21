'use client'
import React, { createContext, useContext, useState } from 'react';

// Creating A Context
const ReactDisableBtnContext = createContext();
export const useReactDisableBtn = () => {
    return useContext(ReactDisableBtnContext);
};

export const ReactDisableBtnProvider = ({ children }) => {

    const [isBtnDisabled, setIsBtnDisabled] = useState({});


    const disableBtn = (btnId) => {
        setIsBtnDisabled((prev) => ({ ...prev, [btnId]: true }));
    }
    const enableBtn = (btnId) => {
        setIsBtnDisabled((prev) => ({ ...prev, [btnId]: false }));
    }


    return (
        <ReactDisableBtnContext.Provider value={{ isBtnDisabled, disableBtn, enableBtn }}>
            {children}
        </ReactDisableBtnContext.Provider>
    );
};