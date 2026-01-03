// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { BlogDetail } from "./pages/BlogDetail/BlogDetail";
import { CreateBlog } from "./pages/CreateBlog/CreateBlog";
import Header from "./components/header/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainContainer/>}>
            <Route path="/" element={<Header/>}>
              <Route index path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blogs/:id" element={<BlogDetail />} />
              <Route path="blogs" element={<CreateBlog />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
function MainContainer() {
  return (
    <div className="container">
      <Outlet/>
    </div>
  )
}

export default App;
