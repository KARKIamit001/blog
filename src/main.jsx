import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LogInPage from "./Pages/LogInPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import JoinUsPage from "./Pages/JoinUsPage.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import BottomNavbar from "./components/BottomNavbar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import BlogReadPage from "./Pages/BlogReadPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TopNavbar/>
      <BottomNavbar/>
      

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<LogInPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/blog/:id" element={<BlogPage/>} />
        <Route path="/join-us" element={<JoinUsPage/>} />
        <Route path="/blog-read/:id" element={<BlogReadPage/>} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
