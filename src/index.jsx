import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/layout";
import Home from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <Layout />
                </header>

                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>

                <footer style={{ height: "80px", width: "100%", backgroundColor: "black", color: "#FFF" }}
                    className="d-flex justify-content-center align-items-center ">
                    <h4>© Copyright</h4>
                </footer>
            </BrowserRouter>

        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)