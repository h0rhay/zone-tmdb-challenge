import React, { createContext } from 'react'
import { SearchContextProvider } from '../hooks/SearchContextHook'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header'
import Footer from './Footer'
import { GenresContextProvider } from '../hooks/GenresContextHook'

export const SearchContext = createContext()

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Zone Challenge" />
      <GlobalStyle />
      <SearchContextProvider>
        <GenresContextProvider>
          <Header />
          <main>
            { children }
          </main>
          <Footer />
        </GenresContextProvider>
      </SearchContextProvider>
    </>
  )
}

export default Layout