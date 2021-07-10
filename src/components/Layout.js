import React, { createContext } from 'react'
import { SearchContextProvider } from '../hooks/SearchContextHook'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header'
import Footer from './Footer'
import { GenresContextProvider } from '../hooks/GenresContextHook'
import { RatingContextProvider } from '../hooks/RatingContextHook'

export const SearchContext = createContext()

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Zone Challenge" />
      <GlobalStyle />
      <SearchContextProvider>
        <GenresContextProvider>
          <RatingContextProvider>
            <Header />
            <main>
              { children }
            </main>
            <Footer />
          </RatingContextProvider>
        </GenresContextProvider>
      </SearchContextProvider>
    </>
  )
}

export default Layout