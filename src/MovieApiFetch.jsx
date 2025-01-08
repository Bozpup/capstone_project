// import React from "react";
// import { useState, useEffect } from "react";

// const MovieApiFetch = () => {
//   const [movie, setMovie] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };
//   useEffect(() => {
//     const LoadApi = async () => {
//       try {
//         const response = await fetch(
//           "http://www.omdbapi.com/?s=girl&apikey=ffc813d3&type=series"
//         );
//         const data = await response.json();
//         console.log(data);
//         if (data.Search) {
//           setMovie(data.Search);
//           setFilteredMovies(data.Search);
//         } else {
//           setMovie([]);
//           setFilteredMovies([]);
//         }
//       } catch (error) {
//         console.log("Failed To Load", error);
//         setError(error.message);
//       }
//     };
//     LoadApi();
//   }, [searchQuery]);
//   useEffect(() => {
//     const results = movie.filter((movies) =>
//       movies.Title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredMovies(results);
//   }, [searchQuery, movie]);
//   if (error) {
//     return <p> Error: {error}</p>;
//   }
//   if (!movie.length) {
//     return <p> Loading...</p>;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search movies..."
//       />
//       {console.log(filteredMovies)}
//       <ul></ul>
//       {filteredMovies.map((item) => (
//         <li key={item.imdbID}>
//           <img src={item.Poster} />
//           <h1>{item.Title}</h1>
//           <h1> {item.Released}</h1>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default MovieApiFetch;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const MovieApiFetch = () => {
//   const [movie, setMovie] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(""); // Empty search query by default
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [movieType, setMovieType] = useState(""); // Track selected movie type

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setMovieType(e.target.value); // Set selected type
//   };

//   useEffect(() => {
//     const LoadApi = async () => {
//       try {
//         // Construct API URL with search query and type
//         const url = `http://www.omdbapi.com/?s=&type=${movieType}&apikey=ffc813d3`;

//         const response = await fetch(url);
//         const data = await response.json();
//         console.log("API Response:", data);

//         if (data.Search) {
//           setMovie(data.Search); // Set movie list
//           setFilteredMovies(data.Search); // Initialize filtered list
//         } else {
//           setMovie([]); // Handle cases where no results are returned
//           setFilteredMovies([]);
//         }
//       } catch (error) {
//         console.log("Failed to load", error);
//         setError(error.message);
//       }
//     };

//     LoadApi();
//   }, [movieType]); // Run when `movieType` changes

//   useEffect(() => {
//     // Filter the movie list based on searchQuery
//     const results = movie.filter((movies) =>
//       movies.Title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredMovies(results);
//   }, [searchQuery, movie]);

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!movie.length) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="">
//       {/* Main Image */}
//       <img
//         src="/images/background.png"
//         alt="Main Background"
//         className="w-full h-auto bg-cover "
//       />
//       <div className="absolute inset-0  flex items-center justify-center text-white">
//         <p className=" xs:text-md xs:mb-[280px]  xs:w-[180px] h-[160px] sm:text-3xl sm:w-[330px] h-[160px]  sm:mt-[10px] md:mt-[-50px] lg:text-5xl lg:w-[520px] h-[200px]  ml-6   font-playfair w-[590px] h-[200px]  sm:whitespace-wrap lg:mt-[10px] xl:mt-[200px] 2xl:mt-[500px]">
//           All Your Favourite Movies In One Place
//         </p>
//       </div>

//       <div className="absolute inset-0  flex items-center justify-center text-white">
//         <div class="absolute flex md:space-x-[100px] lg:space-x-[150px]  lg:space-x-[150px]  xs:space-x-[10px] xs:mb-[290px] xs:text-[14px] italic font-inter font-bold md:text-xl md:mt-[100px] lg:text-2xl xl:mt-[370px] lg:mt-[250px] md:mt-[50px] xl:mt-[550px] 2xl:mt-[700px]">
//           <p>COMEDY</p>
//           <p>ROMANCE</p>
//           <p>THRILLER</p>
//           <p>HORROR</p>
//         </div>
//       </div>
//       <div className="absolute inset-0  flex items-center justify-center  text-black-500">
//         <div class="flex items-center justify-center h-screen">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch} ///
//             placeholder="Search movies..."
//             className="xs: w-[170px] xs:text-xs xs:pl-[29px] xs:h-[20px] xs:px-1 xs:py-1  sm: -mt-[230px] md:mt-[200px] lg:mt-[500px] pl-[70px] text-2xl py-[30px] mt-[990px] ml-1 rounded-md bg-white bg-opacity-80 border border-gray-300 font-georgia shadow-lg placeholder-black italic font-bold sm:w-[330px] h-[41px] xl:mt-[900px]"
//           />
//         </div>
//       </div>
//       <div className="absolute inset-0  flex items-center justify-center text-black xs:hidden sm:whitespace-nowrap md:whitespace-nowrap md:ml-[10px] md:mt-[330px] lg:mt-[500px]  lg:ml-[590px] xl:mt-[867px] xl:ml-[10px] ">
//         <label className="border border-grey-300 bg-red-600 py-2 px-4  ">
//           Filter by Type:
//         </label>
//         <select
//           value={movieType}
//           onChange={handleTypeChange}
//           className="border border-red-300 py-2 px-4 md:px-1 "
//         >
//           <option value="">All</option>
//           <option value="movie">Movie</option>
//           <option value="series">Series</option>
//         </select>
//       </div>
//       <div className="bg-red-600 h-[55px] font-poppins italic px-6 py-4 text-white">
//         <p>Search Results</p>
//       </div>
//       <div className="flex items-center justify-center bg-black min-h-screen">
//         <ul className="flex  py-2 px-1 space-x-6 mt-[100px] flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6  p-2">
//           {filteredMovies.map((item) => (
//             <li
//               key={item.imdbID}
//               className="bg-gray-300 rounded-3xl shadow-md p-4 m-2 mb-[100px] max-w-xs flex flex-col items-center"
//             >
//               <div className="relative py-10 px-6">
//                 <img
//                   src={item.Poster}
//                   alt={item.Title}
//                   className="w-[390px] h-[240px] rounded-full object-cover -mt-24 mx-auto"
//                 />
//               </div>

//               <div className="bg-white py-[10px] px-[50px] m-6">
//                 <h1 className="text-lg font-bold font-bebas text-gray-800  font-georgia mb-2">
//                   Title: {item.Title}
//                 </h1>
//                 <h2 className="text-lg  font-bold  font-georgia text-gray-600 italic">
//                   Release Date: {item.Year}
//                 </h2>
//                 <Link
//                   to={`/movie/${item.imdbID}`}
//                   className="text-blue-500 hover:underline"
//                 >
//                   View More
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MovieApiFetch;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieApiFetch = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieType, setMovieType] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeChange = (e) => {
    setMovieType(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const LoadApi = async () => {
      try {
        setLoading(true);
        const url = `https://www.omdbapi.com/?s=${searchQuery}&type=${movieType}&page=${currentPage}&apikey=ffc813d3`;

        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data);

        if (data.Search) {
          setMovie(data.Search);
          setFilteredMovies(data.Search);
          setTotalResults(data.totalResults);
        } else {
          setMovie([]);
          setFilteredMovies([]);
          setTotalResults(0);
        }
      } catch (error) {
        console.log("Failed to load", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (searchQuery.length > 0) {
        LoadApi();
      } else {
        setMovie([]);
        setFilteredMovies([]);
        setTotalResults(0);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, movieType, currentPage]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      {/* Main Image */}
      <img
        src="/images/background.png"
        alt="Main Background"
        className="w-full h-auto bg-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p className="xs:text-md xs:mb-[280px] xs:w-[180px] h-[160px] sm:text-3xl sm:w-[330px] h-[160px] sm:mt-[10px] md:mt-[-50px] lg:text-5xl lg:w-[520px] h-[200px] ml-6 font-playfair w-[590px] h-[200px] sm:whitespace-wrap lg:mt-[10px] xl:mt-[200px] 2xl:mt-[500px]">
          All Your Favourite Movies In One Place
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="absolute flex md:space-x-[100px] lg:space-x-[150px] xs:space-x-[10px] xs:mb-[290px] xs:text-[14px] italic font-inter font-bold md:text-xl md:mt-[100px] lg:text-2xl xl:mt-[370px] lg:mt-[250px] md:mt-[50px] xl:mt-[550px] 2xl:mt-[700px]">
          <p>COMEDY</p>
          <p>ROMANCE</p>
          <p>THRILLER</p>
          <p>HORROR</p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-black-500">
        <div className="flex items-center justify-center h-screen">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search movies..."
            className="xs:mt-[370px] xs:w-[170px] xs:text-xs xs:pl-[29px] xs:h-[20px] xs:mb-[600px] xs:px-1 xs:py-1 sm:-mt-[230px] md:mt-[200px] lg:mt-[500px] pl-[70px] text-2xl py-[30px] mt-[990px] ml-1 rounded-md bg-white bg-opacity-80 border border-gray-300 font-georgia shadow-lg placeholder-black italic font-bold sm:w-[330px] h-[41px] xl:mt-[900px]"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-black xs:hidden sm:whitespace-nowrap md:whitespace-nowrap md:ml-[10px] md:mt-[330px] lg:mt-[500px] lg:ml-[590px] xl:mt-[867px] xl:ml-[10px]">
        <label className="border border-grey-300 bg-red-600 py-2 px-4">
          Filter by Type:
        </label>
        <select
          value={movieType}
          onChange={handleTypeChange}
          className="border border-red-300 py-2 px-4 md:px-1"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>
      <div className="bg-red-600 h-[55px] font-poppins italic px-6 py-4 text-white">
        <p>Search Results</p>
      </div>
      <div className="flex items-center justify-center bg-black min-h-screen">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ul className="flex py-2 px-1 space-x-6 mt-[100px] flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-2">
            {filteredMovies.map((item) => (
              <li
                key={item.imdbID}
                className="bg-gray-300 rounded-3xl shadow-md p-4 m-2 mb-[100px] max-w-xs flex flex-col items-center"
              >
                <div className="relative py-10 px-6">
                  <img
                    src={
                      item.Poster !== "N/A"
                        ? item.Poster
                        : "/images/no-image.jpg"
                    }
                    alt={item.Title}
                    className="w-[390px] h-[240px] rounded-full object-cover -mt-24 mx-auto"
                  />
                </div>
                <div className="bg-white py-[10px] px-[50px] m-6">
                  <h1 className="text-lg font-bold font-bebas text-gray-800 font-georgia mb-2">
                    Title: {item.Title}
                  </h1>
                  <h2 className="text-lg font-bold font-georgia text-gray-600 italic">
                    Release Date: {item.Year}
                  </h2>
                  <Link
                    to={`/movie/${item.imdbID}`}
                    className="text-blue-500 hover:underline"
                  >
                    View More
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Pagination */}
      {totalResults > 10 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from(
            { length: Math.ceil(totalResults / 10) },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieApiFetch;
