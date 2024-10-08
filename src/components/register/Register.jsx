import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function Register() {
    const { registerService, error } = useRegister();

    const { values, changeHandler, submitHandler } = useForm(registerService, initialValues);

    return (
        <>
            <h5 className="main_heading">Registration</h5>
            <div className="account_flex">
                <article className="account_left">
                    <h4>New here?</h4>

                    <p>Registration is free and easy!</p>

                    <ul>
                        <li>Faster checkout</li>
                        <li>Save multiple shipping addresses</li>
                        <li>View and track orders and more</li>
                    </ul>

                    <Link to="/login" className="btn">
                        Sign In
                    </Link>
                </article>

                <article className="account_right">
                    <h4>Create an account</h4>
                    <div className="alert-form-info">{error}</div>

                    <form onSubmit={submitHandler}>
                        <div className="field">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={changeHandler}
                                value={values.firstName}
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onChange={changeHandler}
                                value={values.lastName}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" onChange={changeHandler} value={values.email} />
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
                        <div className="field">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={changeHandler}
                                value={values.confirmPassword}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <button className="btn">Register</button>
                    </form>
                </article>
            </div>
        </>
    );
}
