import React, { useState } from 'react'
import styled from 'styled-components'

const SearchForm = styled.form`
  &#content {
    transform: translate(0, 0);
  }
  input {
    font-family: Lato, sans-serif;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border: 4px solid #ffffff;
    border-radius: 50%;
    background: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
      padding 0.2s;
    transition-delay: 0.4s;
    transform: translate(0%, 0%);
  }
  .search {
    background: none;
    position: absolute;
    top: 0px;
    left: 0;
    height: 50px;
    width: 50px;
    padding: 0;
    border-radius: 100%;
    outline: 0;
    border: 0;
    color: inherit;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: translate(0%, 0%);
  }

  .search:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: #fff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 26px;
    margin-left: 17px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .close {
    transition: 0.4s ease-in-out;
    transition-delay: 0.4s;
    transform: translateX(250px);
  }

  .close:before {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    margin-top: -1px;
    margin-left: -13px;
    background-color: #fff;
    transform: rotate(45deg);
    transition: 0.2s ease-in-out;
  }

  .close:after {
    content: "";
    position: absolute;
    width: 27px;
    height: 4px;
    background-color: #fff;
    margin-top: -1px;
    margin-left: -13px;
    cursor: pointer;
    transform: rotate(-45deg);
  }

  .square {
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    width: 300px;
    height: 50px;
    border: 4px solid #ffffff;
    border-radius: 0;
    background: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
      padding 0.2s;
    transition-delay: 0.4s, 0s, 0.4s;
    transform: translate(0%, 0%);
  }
`

const Search = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState("false");

  const handleToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    setSearchQuery('')
  }

  return (
    <SearchForm action="/" method="get" id='content'>
      {/* TODO: look into keeping label for a11y but maintaining magnifying glass animation */}
      {/* <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label> */}
      <input
        type="text"
        id="header-search"
        // placeholder="Search blog posts"
        name="s"
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value.toLowerCase())}
        className={`input ${!isOpen && `square`}`}
      />
      <button type="submit" className={`search ${!isOpen && `close`}`} onClick={handleToggle} />
  </SearchForm>
  )
}

export default Search