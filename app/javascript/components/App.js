import React from "react"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import MyFavorite from "./pages/MyFavorites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedIndex from "./pages/ProtectedIndex";
import ProtectedShow from "./pages/ProtectedShow";
import TrailEdit from "./pages/TrailEdit";
import TrailNew from "./pages/TrailNew";
import UnprotectedIndex from "./pages/UnprotectedIndex";
import UnprotectedShow from "./pages/UnprotectedShow";
import mockTrails from "./mockTrails";

const App = (props) => {
  const [trails, setTrails] = useState(mockTrails)
  
    return (
      <BrowserRouter>
        <Header {...props} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/myfavorites" element={<MyFavorite />} />
            <Route path="/myindex" element={<ProtectedIndex />} />
            <Route path="/mytrail" element={<ProtectedShow />} />
            <Route path="/trailedit" element={<TrailEdit />} />
            <Route path="/trailnew" element={<TrailNew />} />
            <Route path="/trails" element={<UnprotectedIndex trails={mockTrails} />} />
            <Route path="/show" element={<UnprotectedShow />}  />
            <Route path="/*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    );
  }


export default App
