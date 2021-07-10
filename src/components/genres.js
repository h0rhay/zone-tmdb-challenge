import React, { useState } from 'react'
import styled from 'styled-components'

const GenreWrap = styled.div`
  text-align: center;
  max-width:80rem;
  margin: 0 auto;
  button {
    font: inherit;
    background-color: transparent;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    margin: 4px 0;
    border: solid 1px var(--white);
    border-radius: 2rem;
    padding: 0.25em 1em;
    color: var(--white);
    & ~ button {
      margin-left: 1rem;
    }
    &.active {
      background-color: var(--white);
      color: var(--primary-color);
    }
  }
`

const Genres = ({ genres, selectedGenres, setSelectedGenres }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (i) => {
    setClicked(i)
    setSelectedGenres(i)
  }

  return (
    <GenreWrap>
      {genres && genres.map(genre => <button 
        key={genre.id}
        id={genre.id}
        onClick={() => handleClick(genre.id)}
        className={`${clicked === genre.id && `active`}`}
        >
          {genre.name}
        </button>)}
    </GenreWrap>
  )
}

export default Genres