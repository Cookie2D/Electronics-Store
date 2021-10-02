import React, {useContext, useState} from "react";

const SearchContext = React.createContext();


export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState([]);

    const searchSet = (data, name) => {
        setSearch(data);
    }

    return (
        <SearchContext.Provider value={{search, searchSet}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    return useContext(SearchContext)
}