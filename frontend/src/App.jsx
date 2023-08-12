import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoginPage/index";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/index";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <ToastContainer
                position="bottom-right"
                theme="light"
                pauseOnHover
                autoClose={1500}
            />
            <Navbar />
            <main className="mb-auto w-10/12 max-w-4xl mx-auto">
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
