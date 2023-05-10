import { createContext, useReducer, useState } from "react";
import DarkModeReduser from "./darkModeReduser";

const INITIAL_STATE = {
    darkMode: false,
}
export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReduser, INITIAL_STATE);
    const [searchProducts, setSearchPrducts] = useState([])
    const [filterProducts, setFilterProducts] = useState({
        category: '',
        location: '',
        delivery: false,
        credit: false
    })
    const [category, setCategory] = useState()

    return (
        <DarkModeContext.Provider value={{
            darkMode: state.darkMode, dispatch,
            searchProducts, setSearchPrducts,
            filterProducts, setFilterProducts,
            category, setCategory
        }}>
            {children}
        </DarkModeContext.Provider>
    );
};