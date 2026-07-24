import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

export default function ProtectedRoute() {
    const { session } = useContext(AuthContext);

    if (!session) {
        return <Navigate to="/signup" replace />;
    }

    return <Outlet />;
}