import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";
import { useDelayedError } from "./useDelayedError";
import request from "../api/requester";

const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/gim;

export const useLogin = () => {
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext();
    const { error, setError } = useDelayedError("", 3000);

    const loginService = async ({ email, password }) => {
        try {
            if (!email.match(regex)) {
                throw "Invalid Email Address";
            }

            if (password.length < 6) {
                throw "Password must be at least 6 character long";
            }

            const result = await request.post("/users/login", { email, password });

            if (result?.message?.length > 0) {
                throw result.message[0];
            }

            changeAuthState({ ...result, isAuthenticated: true });
            navigate("/");
        } catch (err) {
            setError(err);
        }
    };

    return { loginService, error };
};

export const useRegister = () => {
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext();
    const { error, setError } = useDelayedError("", 3000);

    const registerService = async ({ firstName, lastName, email, password, confirmPassword }) => {
        try {
            if (firstName.length < 2) {
                throw "First name must be at least 2 character long";
            }
            if (lastName.length < 2) {
                throw "Laast name must be at least 2 character long";
            }

            if (!email.match(regex)) {
                throw "Invalid Email Address";
            }

            if (password.length < 6) {
                throw "Password must be at least 6 character long";
            }

            if (password !== confirmPassword) {
                throw "Password don't math";
            }

            const result = await request.post("/users/register", {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });

            if (result?.message?.length > 0) {
                throw result.message[0];
            }

            changeAuthState({ ...result, isAuthenticated: true });
            navigate("/");
        } catch (err) {
            setError(err);
        }
    };
    return { registerService, error };
};

export const useLogout = () => {
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext();

    const logoutService = async () => {
        try {
            await request.get("/users/logout");

            changeAuthState({});
        } catch (err) {
            console.log(err.message);
        }
    };
    return { logoutService };
};
