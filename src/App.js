import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Application from "./pages/Application";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}