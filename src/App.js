import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; 
import Header from "./components/Header";
import Profile from "./components/Profile";
import FormSection from "./components/Form";
import ProductFilter from "./components/ProductFilter";
import Footer from "./components/Footer";
import About from "./pages/about";
import InventoryManagement from "./pages/inventory";

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmissions((prev) => [...prev, formData]);
  };

  return (
    <Router>
      <Box sx={{ maxWidth: "1600px", margin: "auto", padding: "20px" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <FormSection onSubmit={handleFormSubmit} />
                <ProductFilter />
              </>
            }
          />
          <Route path="/about" element={<About submissions={submissions} />} />
          <Route path="/inventory" element={<InventoryManagement />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
