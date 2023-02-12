
import { Route, Routes } from "react-router-dom";
import HeaderLower from "./components/HeaderLower";
import HeaderUpper from "./components/HeaderUpper";
import NavLinks from "./components/NavLinks";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <>
        <HeaderUpper />
        <HeaderLower />
        <main>
          <NavLinks />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route />
            <Route />
          </Routes>
        </main>
    </>
  );
}

export default App;
