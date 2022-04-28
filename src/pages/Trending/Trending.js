import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const key = "0132e8b184a6d8e52f826dc4e33cd8fd";
  const url = "https://api.themoviedb.org/3/trending/all/day?api_key=";

  
  useEffect(() => {
      const getTrendingData = async () => {
        const response = await axios.get(`${url}${key}&page=${page}`);
        setContent(response.data.results);
        console.log(response.data.results);
      };
      getTrendingData();
}, [page]);

  return (
    <div className="trending common">
      <div className="container">
        <h1 className="page-title">Trending</h1>
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
        <CustomPagination setPage={setPage} />
      </div>
    </div>
  );
};

export default Trending;
