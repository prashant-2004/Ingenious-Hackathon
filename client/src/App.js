import Header from "./components/users/home/header";
import Assembly from "./components/users/home/Assembly";
import PopularProjects from "./components/users/home/PopularProjects";
import Navbar from "./components/users/navbar";
import Banner from './components/admin/Dashboard/BannerSeection'
import Info from './components/admin/Dashboard/info'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Assembly />
      <PopularProjects />
      <Info />
      <Banner />
     
      
    </>
  );
}

export default App;
