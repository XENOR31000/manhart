import React from "react";
import {Routes, Route} from 'react-router-dom';
import PrepaList from "./components/PrepaList";
import Header from "./components/Header";



const App = () => {
    return (
      <>
      <Header/>
      <Routes>
<Route path='/prepa' element={<PrepaList/>}/>
      <Route path="/" element={<PrepaList/>}/>
      </Routes>
      </>
    );
  };



export default App;
