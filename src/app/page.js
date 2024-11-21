
import TechEvolation from "./Components/TechEvolation";
import JobListingsPage from "./Components/JobListingsPage";
import LookingFor from "./Components/LookingFor";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";




export default function Home() {
  return (
  <div className="HomePage">
    <Navbar/>
  <TechEvolation/>
  <JobListingsPage/>
  <LookingFor/>
< Footer/>
  </div>
  );
}
