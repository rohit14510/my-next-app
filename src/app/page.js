import Image from "next/image";
import Header from "./Components/Header";
import TechEvolation from "./Components/TechEvolation";
import JobListingsPage from "./Components/JobListingsPage";
import LookingFor from "./Components/LookingFor";
import Footer from "./Components/Footer";
import Careers from "./Components/Careers";
import JobApplication from "./Components/JobApplication";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";


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
