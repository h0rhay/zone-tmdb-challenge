import React, { createContext, useState, useEffect } from "react"
import getGenresData from '../services/getGenresData';

const defaultState = {
  genres: '',
  setGenres: () => {},
  selectedGenres: [],
  setSelectedGenres: () => {}
}

const GenresContext = createContext(defaultState)

const GenresContextProvider = props => {
  const [genres, setGenres] = useState('')
  const [selectedGenres, setSelectedGenres] = useState('')

  useEffect(() => {
    getGenresData().then(genreData => setGenres(genreData['genres']))
  }, [])

  return (
    <GenresContext.Provider value={{ genres, setGenres: setGenres, selectedGenres, setSelectedGenres: setSelectedGenres }}>
      {props.children}
    </GenresContext.Provider>
  )
}

export { GenresContextProvider, GenresContext }