import { createContext, useState } from "react";

export const GetContext = createContext()

export const Context = ({ children }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false)

    return (
        <GetContext.Provider value={{ sidebarStatus, setSidebarStatus }}>{children}</GetContext.Provider>
    )
}