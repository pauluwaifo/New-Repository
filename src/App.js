import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Search from "./Searchview";
import Movie from "./Movie";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "./Error";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [click, setClick] = useState()
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  
  window.onload = ()=> {
    console.log("page is fully loaded")
    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6cdab13971e086e7f76a7fd28fe6a1ad&language=en-US&query=${makeid(1)}&page=1&include_adult=false`
      )
        .then((responce) => responce.json())
        .then((data) => {
          setSearchData(data.results);
          console.log(data);
        });
  }

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6cdab13971e086e7f76a7fd28fe6a1ad&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((responce) => responce.json())
        .then((data) => {
          setSearchData(data.results);
          console.log(data);
        });
    }
  }, [searchText, click]);
  


  return (
    <div>
      <Nav searchText={searchText} setSearchText={setSearchText} setClick={setClick}/>
      <Routes>
        <Route
          path="/Searchview"
          element={<Search text={searchText} searchData={searchData} />} />
        <Route exact = "/" path="/Home" element={<Home />} />
        <Route path="/Movie/:id" element={<Movie />} />
        <Route path="*" element={<Error />} />
       
        
      </Routes>
    </div>
  );
}

export default App;
