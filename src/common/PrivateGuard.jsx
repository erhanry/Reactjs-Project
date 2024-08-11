import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export function AuthGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export function GuestGuard() {
    const { isAuthenticated } = useAuthContext();

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
