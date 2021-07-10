import React, { createContext, useState } from "react"

const defaultState = {
  rating: '',
  setRating: () => {},
}

const RatingContext = createContext(defaultState)

const RatingContextProvider = props => {
  const [rating, setRating] = useState('')

  return (
    <RatingContext.Provider value={{ rating, setRating: setRating }}>
      {props.children}
    </RatingContext.Provider>
  )
}

export { RatingContextProvider, RatingContext }