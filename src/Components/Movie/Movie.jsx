import SideBar from "../SideBar/SideBar";
import Movies from "./Movies";

export default function Movie() {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />

        <Movies />
      </div>
    </main>
  );
}
