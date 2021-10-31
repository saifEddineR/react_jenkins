import React from 'react'

const MovieCard = ({movies}) => {
  return (
    <div>
        <h4>{movies.moviename}</h4>
        <img src={movies.movieImg} width='200px' alt='movies'/>
        <p>{movies.gender}</p>
      </div>
  )
}

export default MovieCard
