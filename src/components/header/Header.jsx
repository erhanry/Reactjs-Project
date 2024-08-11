import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import styles from "./Header.module.css";
import { useProductContext } from "../../context/ProductContext";

const ignorePath = ["products", "login", "register"];

export default function Header() {
    const { pathname } = useLocation();

    const { isAuthenticated } = useAuthContext();
    const { cartItems } = useProductContext();
    const showSidebarHeader = !ignorePath.some((path) => pathname.startsWith(`/${path}`));

    return (
        <header className={styles.header}>
            <section className="wrapper">
                <div className={styles.row1}>
                    <ul className={styles.social}>
                        <li>
                            <a href="https://x.com/" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.pinterest.com/" target="_blank">
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.user}>
                        {!isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/login">Log in</Link>
                                </li>
                                <li>
                                    <Link to="/register">Create an account</Link>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={styles.row2}>
                    <figure>
                        <Link to="/">
                            <img src="/images/logo.png" alt="Electronics Logo" />
                        </Link>
                    </figure>
                    <form className={styles.search}>
                        <input type="text" name="q" />
                        <button type="submit">Search</button>
                    </form>
                    <address>
                        <i className="fa-solid fa-phone"></i>
                        <span className={styles.phone_num}>800-2345-6789</span>
                    </address>
                </div>
                <div className={styles.row3}>
                    {showSidebarHeader && (
                        <div className={styles.sidebar}>
                            <h3>Collections</h3>
                        </div>
                    )}
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/sale">Sale</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.cart}>
                        <Link to="/cart">
                            <i className="fa fa-shopping-cart"></i>Cart : {cartItems.length} item(s)
                        </Link>
                    </div>
                </div>
            </section>
        </header>
    );
}
