// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { MemoryRouter, Route, Routes } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    </>
  );
}

export default App;
