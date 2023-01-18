import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";




function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route
          path="/student/:id"
          element={<Add />}
    />
      </Routes>
  );
}

export default App;
