import { createContext, useContext } from "react";

export const AppContext = createContext({
    isLoggedIn: false,
    changeIsLoggedIn: () => { },
    loggedInUser: {},
    changeLoggedInUser: () => { }
})
export const AppProvider = AppContext.Provider
export default function useApp() {
    return useContext(AppContext)
}