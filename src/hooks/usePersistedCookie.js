import { useState } from "react";

export default function usePersistedCookie(key) {
    const [cookie, setState] = useState(() => {
        const authCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith(key))
            ?.split("=")[1];

        return authCookie || "a";
    });

    const clearCookie = () => {
        const authCookie = document.cookie.split("; ").find((row) => row.startsWith(key));
        setState(authCookie[0] + "=; expires=" + new Date().toUTCString());
    };

    return { cookie, clearCookie };
}
