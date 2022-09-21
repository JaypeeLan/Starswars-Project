import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import People from "./Pages/People";
import StarShips from "./Pages/StarShips";
import Species from "./Pages/Species";
import NotFound from "./Pages/NotFound";
import SpeciesDetails from "./Pages/SpeciesDetails";
import PeopeleDetails from "./Pages/PeopleDetails";
import StarshipsDetails from "./Pages/StarshipsDetails";
import FilmsDetails from "./Pages/FilmsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/films/:id" element={<FilmsDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PeopeleDetails />} />
        <Route path="/starships" element={<StarShips />} />
        <Route path="/starships/:id" element={<StarshipsDetails />} />
        <Route path="/species" element={<Species />} />
        <Route path="/species/:id" element={<SpeciesDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
