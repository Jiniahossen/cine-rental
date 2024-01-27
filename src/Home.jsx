import { useContext } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header";
import Movie from "./Components/Movie/Movie";
import { ThemeContext } from "./Context";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full px-10 ${darkMode ? "dark" : ""}`}>
      <Header />
      <Movie />
      <Footer />
    </div>
  );
}
