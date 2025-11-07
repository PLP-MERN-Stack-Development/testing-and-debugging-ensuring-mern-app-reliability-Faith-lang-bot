import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBug from "./pages/CreateBug";
import EditBug from "./pages/EditBug";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBug />} />
        <Route path="/edit/:id" element={<EditBug />} />
      </Routes>
    </Router>
  );
}

export default App;
