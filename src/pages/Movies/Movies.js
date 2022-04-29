import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../Genres";


const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages]= useState();
    const [selectedGenres, setSelectedGenres]=useState([]);
    const [genres, setGenres]=useState([]);
  
    const key = "0132e8b184a6d8e52f826dc4e33cd8fd";
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
  
    const getTrendingData = async () => {
      const response = await axios.get(`${url}${key}&page=${page}`);
      setContent(response.data.results);
      setNumOfPages(response.data.total_pages);
      console.log(response.data.results);
    };
    
    useEffect(() => {
        getTrendingData();
        // eslint-disable-next-line
  }, [page,genres]);

  return (
    <div className="movies common">
      <div className="container">
        <h1 className="page-title">Movies</h1>
        <Genres 
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        />
        <div className="main">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
        </div>
        {
            numOfPages > 1 && (
                <CustomPagination numOfPages={numOfPages} setPage={setPage} />
            )
        }
      </div>
    </div>
  );
};

export default Movies;
