import React, { useEffect, useState, useContext } from "react"
import styled from 'styled-components'
import Layout from '../components/Layout'
import { SearchContext } from '../hooks/SearchContextHook'
import { GenresContext } from '../hooks/GenresContextHook'
import { RatingContext } from '../hooks/RatingContextHook'
import getMovieData from '../services/getMovieData'
import MovieTile from '../components/MovieTile'
import Loader from '../components/Loader';
import Genres from '../components/genres';
import RatingFilter from '../components/ratingfilter';

const PageWrap = styled.div`
  .heading-no-match {
    color: var(--white);
    text-align:center;
    width:90vw;
    padding-top:2rem;
  }
`

const MovieContent = styled.section`
  justify-content: space-between;
`

// Gatsby reorders Layout to be a child of IndexPage making it difficult to work with global context.
// Creating the page content in a child component is a simple workaround for undefined context value.
const IndexContent = () => {
  const [movies, setMovies] = useState()
  const [genreFilteredMovies, setGenreFilteredMovies] = useState()
  const [ratingFilteredMovies, setRatingFilteredMovies] = useState()
  const { searchQuery } = useContext(SearchContext) 
  const { genres, setGenres, selectedGenres, setSelectedGenres } = useContext(GenresContext)
  const { rating, setRating } = useContext(RatingContext)

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

  const filterMoviesByRating = (movies, rating) => {
    let movieList = []
    if (!rating) {
      return movies
    }
    return movies?.filter(movie => {
      if(rating === 1 && movie.vote_average < 2) {
        return movieList.push(movie)
      }
      if(rating === 2 && movie.vote_average > 2 && movie.vote_average < 4) {
        return movieList.push(movie)
      }
      if(rating === 3 && movie.vote_average > 4 && movie.vote_average < 6) {
        return movieList.push(movie)
      }
      if(rating === 4 && movie.vote_average > 6 && movie.vote_average < 8) {
        return movieList.push(movie)
      }
      if(rating === 5 && movie.vote_average > 8) {
        return movieList.push(movie)
      }
      return setRatingFilteredMovies(movieList)
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

  useEffect(() => {
    filterMoviesByRating(movies, rating)
  }, [movies, rating])

  return (
    <PageWrap>
      <div>
        <Genres 
          genres={genres}
          setGenres={setGenres}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </div>
      <div>
        <RatingFilter 
          rating={rating}
          setRating={ setRating }
        />
      </div>
      <div>
        <MovieContent>
          {(filteredMovies && !selectedGenres && !rating) &&
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
            <h2 className='heading-no-match'>No matching Genres</h2>
          }
          {(ratingFilteredMovies && rating) &&
              ratingFilteredMovies?.map(mov => (
                <MovieTile key={mov?.id} movie={mov} />
                ))
              }
          {(ratingFilteredMovies && rating && !ratingFilteredMovies.length) &&
            <h2 className='heading-no-match'>No movies that bad!</h2>
          }
          {(!filteredMovies && !selectedGenres) &&
              <Loader />
            }
        </MovieContent>
      </div>
    </PageWrap>
  )
}

const IndexPage = () => (
  <Layout>
    <IndexContent />
  </Layout>
)

export default IndexPage
