import MovieCard from "./MovieCard";

export default function Movies() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <MovieCard />
      </div>
    </div>
  );
}
