

import { useState } from "react";
import Navbar from "./Navbar.jsx"
import Search from "./Search.jsx";
import ImagesComponent from "./ImagesComponent.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />  
      <Search/>
      <ImagesComponent/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;

