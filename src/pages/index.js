import React, { useEffect, useState, useContext } from "react"
import styled from 'styled-components'
import Layout from '../components/Layout'
import { SearchContext } from '../hooks/SearchContextHook'
import { GenresContext } from '../hooks/GenresContextHook'
import getMovieData from '../services/getMovieData'
import MovieTile from '../components/MovieTile'
import Loader from '../components/Loader';
import Genres from '../components/genres';

const PageWrap = styled.section`

`

const MovieContent = styled.section`
  justify-content: space-between;
`

// Gatsby reorders Layout to be a child of IndexPage making it difficult to work with global context.
// Creating the page content in a child component is a simple workaround for undefined context value.
const IndexContent = () => {
  const [movies, setMovies] = useState()
  const [genreFilteredMovies, setGenreFilteredMovies] = useState()
  const { searchQuery } = useContext(SearchContext) 
  const { genres, setGenres, selectedGenres, setSelectedGenres } = useContext(GenresContext)

  const filterMovies = (movies, query) => {
    if (!query) {
        return movies;
    }
    return movies?.filter((movie) => {
      return movie.title.toLowerCase().includes(query)
    });
  }

  const orderPopularMovies = (movies) => {
    return movies?.sort(function(a, b) {
      return b.popularity - a.popularity
    })
  }

  const filterMoviesByGenre = (movies, selectedGenres) => {
    const movieList = []
    if (!selectedGenres) {
      return movies
    }
    return movies?.filter(movie => {
      movie.genre_ids?.map(id => {
        if (id === selectedGenres){
          return movieList.push(movie)
        }
        return null
      })
      return setGenreFilteredMovies(movieList)
    })
  }

  const orderedMovies = orderPopularMovies(movies)
  
  const filteredMovies = filterMovies(orderedMovies, searchQuery)

  useEffect(() => {
    getMovieData().then(movieData => setMovies(movieData['results']))
  }, [])

  useEffect(() => {
    filterMoviesByGenre(movies, selectedGenres)
  }, [movies, selectedGenres])

  return (
    <PageWrap>
      <Genres 
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <MovieContent>
        {console.log('filteredMovies', filteredMovies)}
        {console.log('genreFilteredMovies', genreFilteredMovies)}
        {(filteredMovies && !selectedGenres) &&
            filteredMovies?.map(mov => (
              <MovieTile key={mov?.id} movie={mov} />
            ))
          }
        {(genreFilteredMovies && selectedGenres) &&
            genreFilteredMovies?.map(mov => (
              <MovieTile key={mov?.id} movie={mov} />
            ))
          }
        {(genreFilteredMovies && selectedGenres && !genreFilteredMovies.length) &&
            <h2>No matching Genres</h2>
          }
        {(!filteredMovies && !selectedGenres) &&
            <Loader />
          }
      </MovieContent>
    </PageWrap>
  )
}

const IndexPage = () => (
  <Layout>
    <IndexContent />
  </Layout>
)

export default IndexPage
