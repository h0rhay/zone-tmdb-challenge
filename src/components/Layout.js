import React, { createContext } from 'react'
import { SearchContextProvider } from '../hooks/SearchContextHook'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header'
import Footer from './Footer'

export const SearchContext = createContext()

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Zone Challenge" />
      <GlobalStyle />
      <SearchContextProvider>
        <Header />
        <main>
          { children }
        </main>
        <Footer />
      </SearchContextProvider>
    </>
  )
}

export default Layout