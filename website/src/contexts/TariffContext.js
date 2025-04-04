import { createContext, useContext } from "react";

export const TariffContext = createContext({
    tableData: null,
    filterLocation: '1',
    changeFilterLocation: () => { }
})
export const TariffProvider = TariffContext.Provider
export default function useTariff() {
    return useContext(TariffContext)
}