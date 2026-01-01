// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { BlogDetail } from "./pages/blog/BlogDetailPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
