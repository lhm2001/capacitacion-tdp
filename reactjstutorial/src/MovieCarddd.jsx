import React from 'react'

const MovieCarddd = ({movie1}) => {
    
    console.log(movie1)

    return (

        <div className='movie'>
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}></img>
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCarddd;


/* import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard; */