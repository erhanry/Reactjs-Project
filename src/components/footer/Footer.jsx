import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className="wrapper">
                <nav className={styles.content}>
                    <div className={styles.column}>
                        <h5>quick menu</h5>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cart">My Cart</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h5>Product</h5>
                        <ul>
                            <li>
                                <Link to="/sale">Sale</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h5>Follow us</h5>
                        <ul className={styles.social}>
                            <li>
                                <a href="https://x.com/" target="_blank">
                                    <i className="fa-brands fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="fa-brands fa-youtube"></i>
                                    <span>Youtube</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <i className="fa-brands fa-pinterest"></i>
                                    <span>Pinterest</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.copyright}>
                    <p>Electronics © {new Date().getFullYear()} All rights reserved</p>
                </div>
            </section>
        </footer>
    );
}
