import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

const initialValues = { email: "", password: "" };

export default function Login() {
    const { message, loginService } = useLogin();

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginService);

    return (
        <>
            <h5 className="main_heading">Login or create an account</h5>
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
                    <form onSubmit={submitHandler}>
                        {message && <p className="alert-form-info">{message}</p>}

                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={changeHandler}
                                value={values.email}
                                autoComplete="on"
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
                                autoComplete="on"
                            />
                        </div>
                        <button className="btn">Sign In</button>
                    </form>
                </article>
            </div>
        </>
    );
}
