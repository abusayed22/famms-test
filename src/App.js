import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/partials/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
