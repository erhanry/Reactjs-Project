import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

const initialValues = {
    email: "",
    password: "",
};

export default function Login() {
    const { loginService, error } = useLogin();

    const { values, changeHandler, submitHandler } = useForm(loginService, initialValues);

    return (
        <>
            <h5 className="main_heading">Login</h5>
            <div className="account_flex">
                <article className="account_left">
                    <h4>New here?</h4>

                    <p>Registration is free and easy!</p>

                    <ul>
                        <li>Faster checkout</li>
                        <li>Save multiple shipping addresses</li>
                        <li>View and track orders and more</li>
                    </ul>

                    <Link to="/register" className="btn">
                        Create an account
                    </Link>
                </article>

                <article className="account_right">
                    <h4>Already registered?</h4>
                    <div className="alert-form-info">{error}</div>

                    <form onSubmit={submitHandler}>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={changeHandler}
                                value={values.email}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={changeHandler}
                                value={values.password}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <button className="btn">Sign In</button>
                    </form>
                </article>
            </div>
        </>
    );
}
