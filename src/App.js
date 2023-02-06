import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

function App() {
  
  // const [data, setData] = useState([{}])

  

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
  </BrowserRouter>
  <Footer />
    </>
  )
}

export default App;