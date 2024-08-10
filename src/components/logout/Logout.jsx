import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    const { logoutService } = useLogout();

    logoutService();

    return <Navigate to="/" />;
}
