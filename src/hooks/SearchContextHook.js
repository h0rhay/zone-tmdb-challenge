import React, { createContext, useState } from "react"

const defaultState = {
  searchQuery: '',
  setSearchQuery: () => {},
}

const SearchContext = createContext(defaultState)

const SearchContextProvider = props => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery: setSearchQuery }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export { SearchContextProvider, SearchContext }