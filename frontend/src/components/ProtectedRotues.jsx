import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRotues = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

ProtectedRotues.propTypes = {
    isAuth: PropTypes.bool.isRequired,
};

export default ProtectedRotues;
