import React, { useState } from 'react'
import styled from 'styled-components'

const RatingWrap = styled.div`
  padding: 2rem 0 1rem 0;
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
  h3 {
    color: var(--white);
    padding-bottom: 1rem;
  }
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

const RatingFilter = ({ rating, setRating }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (i) => {
    setClicked(i)
    setRating(i)
  }
  return (
    <RatingWrap>
      <h3>Filter by Rating:</h3>
      <button onClick={() => handleClick(1)} className={`${clicked === 1 && `active`}`}><span role='img' aria-label='Rating Button'>⭐️</span></button>
      <button onClick={() => handleClick(2)} className={`${clicked === 2 && `active`}`}><span role='img' aria-label='Rating Button'>⭐️⭐️</span></button>
      <button onClick={() => handleClick(3)} className={`${clicked === 3 && `active`}`}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️</span></button>
      <button onClick={() => handleClick(4)} className={`${clicked === 4 && `active`}`}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️⭐️</span></button>
      <button onClick={() => handleClick(5)} className={`${clicked === 5 && `active`}`}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️⭐️⭐️</span></button>
    </RatingWrap>
  )
}

export default RatingFilter