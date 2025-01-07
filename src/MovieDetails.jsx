import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Retrieve the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch detailed movie information
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=ffc813d3`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          setError(data.Error || "Failed to fetch movie details");
        }
      } catch (err) {
        setError("An error occurred while fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-500">
      {movieDetails && (
        <>
          <div className="bg-red-600 text-white font-poppins italic px-6 py-4 fixed top-0 left-0 z-10">
            <p>Movie Details</p>
          </div>

          <h1 className="text-3xl font-bold font-bebas border border-gray-300 mb-4 xs: p-9">
            {movieDetails.Title}
          </h1>
          <img
            src={
              movieDetails.Poster !== "N/A"
                ? movieDetails.Poster
                : "/images/fallback.png"
            }
            alt={movieDetails.Title}
            className="w-64 h-auto rounded-lg shadow-md mb-6"
          />
          <p className="text-lg  border border-gray-300 px-4 py-4 font-bebas mb-2">
            <strong>Genre:</strong> {movieDetails.Genre}
          </p>
          <p className="text-lg font-bebas  border border-gray-300  px-4 py-4 mb-2">
            <strong>Rating:</strong> {movieDetails.imdbRating} / 10
          </p>
          <p className="text-lg  border border-gray-300 px-4 py-4 font-bebas mb-2">
            <strong>Cast:</strong> {movieDetails.Actors}
          </p>
          <p className="text-lg  border border-gray-300 px-4 py-4 font-bebas  mb-4">
            <strong>Plot:</strong> {movieDetails.Plot}
          </p>
          <Link
            to="/"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
