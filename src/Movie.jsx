import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Movie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true)
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    console.log(`Make an api request to ${id}`);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6cdab13971e086e7f76a7fd28fe6a1ad&language=en-US`
    )
      .then((responce) => responce.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false)
        console.log(data)
      });
  }, [id]);
  function renderMovieDetails() {
    if (isLoading) {
        return <Hero pageTitle = "Loading..."/>
    }
    if (movieDetails) {
        let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        if (movieDetails.poster_path == null) {
            console.log("posterPath is null")
            posterPath = "https://reactjs.org/logo-og.png"
            var altposterPath = `Image Goes In Here`
        }
        return (
            <>
        <Hero pageTitle={movieDetails.original_title} backdrop = {backdropURL} />
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <img src={posterPath} alt={altposterPath} className="img-fluid shadow rounded" />
                </div>
                <div className="col-md-9">
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead m-3">
                        <b>Overview:</b><br />
                        {movieDetails.overview}
                    </p>
                    <p className="lead m-3">
                        <b>Language</b> <br />
                        {movieDetails.original_language}
                    </p>  
                    <p className="lead m-3">
                        <b>Status</b> <br />
                        {movieDetails.status}
                    </p>
                    <p className="lead m-3">
                        <b>Release date</b> <br />
                        {movieDetails.release_date}
                    </p>
                    <div className="lead m-3">
                        <b>Genres</b> <br />
                       ({movieDetails.genres.id})
                    </div>
                   
                </div>
            </div>
        </div>
            </>
        )
    }
  }
  return renderMovieDetails(); 
};

export default Movie;
