import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="rt">
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<Timer d="14 Jun 2022 09:00" name="Limba Romana" />}
              path="/limba-romana"
            />
            <Route
              element={<Timer d="16 Jun 2022 09:00" name="Matematica" />}
              path="matematica"
            />
            <Route
              element={<Timer d="23 Jun 2022 08:00" name="Rezultate" />}
              path="rezultate"
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
