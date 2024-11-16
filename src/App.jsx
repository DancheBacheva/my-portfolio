import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { useTheme } from "./context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);
  return (
    <>
      <div>
        <Header />
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="theme-toggle"
          style={{
            border: "none",
            borderRadius: "3px",
            background: "transparent",
            color: "yellow",
            cursor: "pointer",
            padding: "8px",
            fontSize: "24px",
          }}
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
