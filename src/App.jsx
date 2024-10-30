import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import RadioAdvertisement from "./components/MakeOrder";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <MainPage />
              <RadioAdvertisement />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
