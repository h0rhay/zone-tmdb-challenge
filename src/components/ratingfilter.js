import React from 'react'
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
  }
`

const RatingFilter = ({ rating, setRating }) => {
  return (
    <RatingWrap>
      <h3>Filter by Rating:</h3>
      <button onClick={() => setRating(1)}><span role='img' aria-label='Rating Button'>⭐️</span></button>
      <button onClick={() => setRating(2)}><span role='img' aria-label='Rating Button'>⭐️⭐️</span></button>
      <button onClick={() => setRating(3)}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️</span></button>
      <button onClick={() => setRating(4)}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️⭐️</span></button>
      <button onClick={() => setRating(5)}><span role='img' aria-label='Rating Button'>⭐️⭐️⭐️⭐️⭐️</span></button>
    </RatingWrap>
  )
}

export default RatingFilter