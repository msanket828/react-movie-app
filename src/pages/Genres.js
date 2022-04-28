import React, { useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';


const Genres=({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setpage
})=> {

    const key = "0132e8b184a6d8e52f826dc4e33cd8fd";

    
    useEffect(()=> {
        const fetchGenres=async ()=> {
            const data=await axios.get(
                `https://api.themoviedb.org/3/genre/${type}/list?api_key=${key}`
            );
            setGenres(data.data.genres);
        }
        fetchGenres();
        return ()=> {
            setGenres({});
        }
    },[])

    return (
        <div className='genres'>
            <div>
                {
                   genres && genres.map((genre)=> (
                        <Chip 
                        className='genre-chip'
                        label={genre.name}
                        size="small"
                        key={genre.id}
                        clickable
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Genres;