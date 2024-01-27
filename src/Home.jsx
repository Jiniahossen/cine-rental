import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header";
import Movie from "./Components/Movie/Movie";

export default function Home() {
  return (
    <div className={`h-full w-full`}>
      <Header />
      <Movie />
      <Footer />
    </div>
  );
}
