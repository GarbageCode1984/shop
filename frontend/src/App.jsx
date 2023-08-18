import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoginPage/index";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/index";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./store/thunkFunctions";

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
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user?.isAuth);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isAuth) {
            dispatch(authUser());
        }
    }, [isAuth, pathname, dispatch]);

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
