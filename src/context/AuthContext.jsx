import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    firstName: "",
    lastName: "",
    email: "",
    cartItems: [],
    cookie: "",
    isAuthenticated: false,
    changeAuthState: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contexData = {
        firstName: authState.firstName,
        lastName: authState.lastName,
        email: authState.email,
        isAuthenticated: !!authState.email,
        cartItems: [],
        changeAuthState,
    };
    return <AuthContext.Provider value={contexData}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};
