import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [togglePeople, setTogglePeople] = useState(true)
  const {
    isLoading,
    error,
    data: planets,
  } = useFetch(page > 0 ? `/?page=${page}` : '', 'planets')

  const prev = () => {
    if (page > 0) {
      setPage((oldPage) => oldPage - 1)
    }
  }
  const next = () => {
    setPage((oldPage) => oldPage + 1)
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        planets,
        query,
        setQuery,
        setPage,
        page,
        next,
        prev,
        togglePeople,
        setTogglePeople,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
