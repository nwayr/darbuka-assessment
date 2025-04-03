import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
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
      </div>
    </Router>
  );
};

export default App;
