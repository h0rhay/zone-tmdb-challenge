import React, { useEffect, useState, useContext } from "react"
import styled from 'styled-components'
import Layout from '../components/Layout'
import { SearchContext } from '../hooks/SearchContextHook'
import getMovies from '../services/getData'
import MovieTile from '../components/MovieTile'
import Loader from '../components/Loader';

const MovieContent = styled.section`
  justify-content: space-between;
`

// Gatsby reorders Layout to be a child of IndexPage making it difficult to work with global context.
// Placing the page content in a child component is a simple workaround for undefined context value.
const IndexContent = () => {
  const [movies, setMovies] = useState()
  const { searchQuery } = useContext(SearchContext) 

  const filterMovies = (movies, query) => {
    if (!query) {
        return movies;
    }

    return movies?.filter((movie) => {
      let matched
      if (movie.title.toLowerCase().includes(query)) {
        matched = movie.title.toLowerCase()
        return matched
      }
      return false
    });
  }

  const orderPopularMovies = (movies) => {
    return movies?.sort(function(a, b) {
      return b.popularity - a.popularity
    })
  }

  const orderedMovies = orderPopularMovies(movies)
  
  const filteredMovies = filterMovies(orderedMovies, searchQuery)

  useEffect(() => {
    getMovies().then(movieData => setMovies(movieData['results']))
  }, [])

  return (
    <MovieContent>
      {filteredMovies && console.log('filteredMovies', filteredMovies)}
      {filteredMovies ?
        filteredMovies?.map(mov => (
          <MovieTile key={mov.date} movie={mov} />
        ))
        :
        <Loader/>
      }
    </MovieContent>
  )
}

const IndexPage = () => (
  <Layout>
    <IndexContent />
  </Layout>
)

export default IndexPage
