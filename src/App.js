
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderLower from "./components/HeaderLower";
import HeaderUpper from "./components/HeaderUpper";
import NavLinks from "./components/NavLinks";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact"


function App() {
  return (
    <>
        <HeaderUpper />
        <HeaderLower />
        <main>
          <NavLinks />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
