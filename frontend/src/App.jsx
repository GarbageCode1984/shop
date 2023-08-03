import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoginPage/index";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/index";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer/index";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
