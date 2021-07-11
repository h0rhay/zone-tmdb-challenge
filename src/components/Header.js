import React, { useContext } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { SearchContext } from '../hooks/SearchContextHook'

const HeaderSection = styled.section`
  margin-top:1rem;
  min-height: 4rem;
  justify-content: space-between;
  align-items: center;
  h1, h2 {
    color: var(--white);
  }
  h2 {
    opacity: 0.8;
    margin-left: 1rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  width: 70%;
  @media(max-width:889px) {
    width:100%;
    justify-content: center;
  }
`

const SearchContainer = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  height: 2.6875rem;
  display: flex;
  width: 30%;
  @media(max-width:889px) {
    width:100%;
    margin: 2rem 0;
    justify-content: center;
    align-items: flex-start;
  }
`

const Title = styled.h1`
  --minFontSize: 2.4rem;
  --maxFontSize: 8rem;
  --scaler: 5vw;
  font-size: clamp( var(--minFontSize), var(--scaler), var(--maxFontSize) );
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  --minFontSize: 1.45rem;
  --maxFontSize: 2.074rem;
  --scaler: 2.5vw;
  font-size: clamp( var(--minFontSize), var(--scaler), var(--maxFontSize) );
  text-transform: uppercase;
`

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  return (
    <header>
      <HeaderSection>
        <TitleContainer>
          <a href='/'>
            <Title>Movie Explorer</Title>
          </a>
        </TitleContainer>
        <SearchContainer>
        <Search 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        </SearchContainer>
      </HeaderSection>
    </header>
  )
}

export default Header