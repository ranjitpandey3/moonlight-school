import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty"; // <-- Add this
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/faculty" element={<Faculty />} /> {/* <-- Add this */}
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}