import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import Header from "./components/header";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const url = "http://deep-patel-portfolio.local/wp-json/wp/v2";
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchAll = async () => {
    try {
      let res = await axios.get(`${url}/skills/?per_page=20`);
      let resJson = await axios.get("/data/portfolio.json");
      setSkills(res.data);
      setWork(resJson.data);
      setDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (() => {
      if (!dataFetched) {
        fetchAll();
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About skills={skills} />} />
        <Route path="/portfolio" element={<Portfolio work={work} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
