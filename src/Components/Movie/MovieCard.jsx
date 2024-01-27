import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Ratings";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  const hadleMovieSelection=(movie)=>{
    setSelectedMovie(movie);
    setShowModal(true);
  }

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => hadleMovieSelection(movie)}>
          <img
            className="w-full h-72 object-cover"
            src={`/Images/movie-covers/${movie.cover}`}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
