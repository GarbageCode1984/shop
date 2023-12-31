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
import NotAuthRoutes from "./components/NotAuthRoutes";
import ProtectedRotues from "./components/ProtectedRotues";
import ProtectedPage from "./pages/ProtectedPage/index";
import UploadProductPage from "./pages/UploadProductPage/index";
import DetailProductPage from "./pages/DetailProductPage/index";
import CartPage from "./pages/CartPage/index";
import HistoryPage from "./pages/HistoryPage/index";

function Layout() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <ToastContainer position="bottom-right" theme="light" pauseOnHover autoClose={1500} />
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

                    {/* 로그인한 사람만 갈 수 있는 경로 */}
                    <Route element={<ProtectedRotues isAuth={isAuth} />}>
                        <Route path="/protected" element={<ProtectedPage />} />
                        <Route path="/product/upload" element={<UploadProductPage />} />
                        <Route path="/product/:productId" element={<DetailProductPage />} />
                        <Route path="/user/cart" element={<CartPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Route>

                    {/* 로그인한 사람은 갈 수 없는 경로 */}
                    <Route element={<NotAuthRoutes isAuth={isAuth} />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
