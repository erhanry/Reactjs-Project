import { createContext } from "react";

export const AuthContext = createContext({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    cart: [],
    isAuthenticated: false,
    changeAuthState: () => null,
});
