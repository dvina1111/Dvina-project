import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import axios from './../axios';

const styles = {
    row:{
        color:"white",
        marginLeft:"20px",
    "& .row_poster":{
    maxHeight:"100px",
    objectFit:"contain",
    marginRight:"10px",
    width:"100%",
    transition:"transform 450ms",
    "&:hover":{
        transform:"scale(1.08)",
        opacity:1
    },
    "&::-webkit-scrollbar":{
        display:"none"
    }
    },
    "& .row_posters":{
        display:"flex",
        overflowY:"hidden",
        overflowX:"scroll",
        padding:"20px",
        "&::-webkit-scrollbar":{
            display:"none"
        }
    },
    "& .row_posterLarge":{
        maxHeight:"250px",
        "&:hover":{
            transform:"scale(1.09)",
            opacity:1
        }
    }
    }
};

function Row(props) {
  const { classes, title, fetchUrl, isLargeRow = false } = props;

  const [movies, setMovies] = useState([]);
  const base_Url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const requests = await axios.get(fetchUrl);
        if (isMounted) {
          setMovies(requests.data.results);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          const isValidMovie = (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path);
          return (
            isValidMovie && (
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default withStyles(styles)(Row);
