import { useEffect } from "react";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    const logout = useLogout();

    useEffect(() => {
        async () => logout;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
