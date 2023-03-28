import React, {useEffect,useState} from 'react'
import instance from '../baseURL'
import './Row.css';

function Row({title,fetchUrl,isLargeRow})
{
    // movie state
    const [movies,setmovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/";

    async function fetchData()
    {
       const result= await instance.get(fetchUrl)
       setmovies(result.data.results);
    }

    useEffect(()=>{
        fetchData()
    },[])
    // console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img 
                    className={`movie ${isLargeRow && "largeMovie"}`}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                    alt={movie.name}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Row