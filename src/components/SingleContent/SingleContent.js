import React from 'react';
import { img_300, unavailable } from '../../config/config';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div className='single-content' id={id}>
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <h3 className='title'>{title}</h3>
      <div className='info'>
        <span className='media-type'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span className='date'>{date}</span>
      </div>
      <span className={vote_average > 7 ? 'review bg-primary': 'review bg-secondary'}>{vote_average}</span>
    </div>
  )
}

export default SingleContent;