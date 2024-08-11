import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePresistedState";

export const AuthContext = createContext({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthstate] = usePersistedState("auth", {});

    const changeAuthState = (state) => {
        setAuthstate(state);
    };

    const contexData = {
        ...authState,
        changeAuthState,
    };

    return <AuthContext.Provider value={contexData}>{props.children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
