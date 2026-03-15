import { createContext, useState } from "react";

export const UIFormContext = createContext(null)

export const FormUIProvider = ({ children }) => {
    const [activeForm, setActiveForm] = useState(null)
    return (
        <UIFormContext.Provider value={{ activeForm, setActiveForm }}>
            {children}
        </UIFormContext.Provider>
    )
}