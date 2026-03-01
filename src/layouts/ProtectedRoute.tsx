import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    let isAuthenticated = localStorage.getItem('user') || false;

    return (
        <>
            {
                isAuthenticated ? <Outlet /> : <Navigate to="/login" />
            }
        </>
    )
}

export default ProtectedRoute