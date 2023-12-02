import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./Routes/movies";
import { TV } from "./Routes/tv";
import { Home } from "./Routes/home";
import { Nav } from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
