import React from 'react'
import styled from 'styled-components'
import buildImagePath from '../utils/buildImagePath'

const Card = styled.a`
  text-decoration: none;
  background-color: var(--card-bg-color);
  display:flex;
  flex-direction: column;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.5);
  overflow:hidden;
  width: 48%;
  margin: 1.5rem 0;
  transition: transform 0.3s cubic-bezier(.43,.41,.22,.91);
  @media(min-width: 48rem) {
    width: 30%;
  }
  @media(min-width: 60rem) {
    width: 22.5%;
  }
  &:hover {
    transform: scale(1.05);
    .card__image {
      filter: contrast(100%);
    }
  }
`

const Title = styled.h3`
  --minFontSize: 1.3rem;
  --maxFontSize: 2rem;
  --scaler: 2.5vw;
  font-size: clamp( var(--minFontSize), var(--scaler), var(--maxFontSize) );
  min-height: 3.25rem;
  margin-bottom: 0.5rem;
  @media(min-width:768px) {
    min-height: 10vmin;
  }
  @media(min-width:960px) {
    min-height: 12vmin;
  }
  
`

const CardImage = styled.div`
  background: url(${props => props.imgSrc}) no-repeat center center;
  background-size: cover;
  padding-top: 150%;
  filter: contrast(70%);
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
`

const CardContent = styled.div`
  padding: 1rem;
  display:flex;
  flex-direction: column;
  height:100%;
  p {
    flex: 1 0 auto;
  }
`

const Tags = styled.ul`
  display:flex;
  flex-flow: wrap;
  flex: 1 0 auto;
  align-items: flex-end;
  justify-content: center;
`

const Tag = styled.li`
  font-size: 0.75rem;
  font-family: Lato, sans-serif;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0.1rem;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  color: var(--text-color);
  position:relative;
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 0.25rem);
    left: -0.25rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
  &:nth-child(even) {
    &:before {
      background-color: var(--secondary-color);
    }
  }
`

const BlogTile = ({ movie }) => (
  <Card href='/' target='_blank' rel='noopener noreferer'>
    <CardImage imgSrc={buildImagePath(movie.poster_path)} className='card__image' />
    <CardContent>
    <Title>{movie.title}</Title>
      {/* <p>{post.description}&hellip;</p>
      <Tags>
        {post.tags.map((tag, i) => <Tag key={i}><span>{tag}</span></Tag>)}
      </Tags> */}
    </CardContent>
  </Card>
)

export default BlogTile