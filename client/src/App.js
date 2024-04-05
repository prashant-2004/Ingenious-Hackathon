import Header from "./components/users/home/header";
import Assembly from "./components/users/home/Assembly";
import PopularProjects from "./components/users/home/PopularProjects";
import Navbar from "./components/users/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Assembly />
      <PopularProjects />
    </>
  );
}

export default App;
