import { useContext, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";
import request from "../services/requester";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const { message, changeAuthState } = useContext(AuthContext);

    const loginService = async ({ email, password }) => {
        try {
            const result = await request.post("/users/login", { email, password });
            changeAuthState(result);
            navigate("/");
        } catch (err) {
            changeAuthState(err);
        }
    };
    return { message, loginService };
};

export const useRegister = () => {
    const navigate = useNavigate();
    const { message, changeAuthState } = useContext(AuthContext);

    const registerService = async ({ firstName, lastName, email, password, confirmPassword }) => {
        try {
            if (firstName.length < 2) {
                throw { message: "First name must be at least 2 character long" };
            }
            if (lastName.length < 2) {
                throw { message: "Laast name must be at least 2 character long" };
            }

            if (password.length < 6) {
                throw { message: "Password must be at least 6 character long" };
            }

            const result = await request.post("/users/register", {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });
            changeAuthState(result);
            navigate("/");
        } catch (err) {
            changeAuthState(err);
        }
    };
    return { message, registerService };
};

export const useLogout = () => {
    const navigate = useNavigate();
    const { changeAuthState } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            await request.get(`/users/logout`);
            changeAuthState({});
            navigate("/");
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};
