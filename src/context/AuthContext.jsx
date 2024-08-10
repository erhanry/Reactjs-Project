import { createContext, useContext, useState } from "react";
import usePersistedCookie from "../hooks/usePersistedCookie";

export const AuthContext = createContext({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    isAuthenticated: false,
    cartItems: [],
    changeAuthState: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});
    const { cookie } = usePersistedCookie("auth-cookie");

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contexData = {
        _id: authState._id,
        firstName: authState.firstName,
        lastName: authState.lastName,
        email: authState.email,
        isAuthenticated: authState.isAuthenticated || !!cookie,
        cartItems: [],
        changeAuthState,
    };

    return <AuthContext.Provider value={contexData}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
