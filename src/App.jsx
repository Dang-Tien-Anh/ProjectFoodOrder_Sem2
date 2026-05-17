import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // import the new Main page
// import other pages if you want, e.g. About, Contact, etc.

function App() {
  return (
    <Router>
      <Header tableNumber={"12E"} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
