import styles from "./Header.module.css";

export default function Header() {
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
                        <li>
                            <a href="/login">Log in</a>
                        </li>

                        <li>
                            <a href="/register">Create an account</a>
                        </li>

                        <li className="checkout">
                            <a href="/cart">Check out</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.row2}>
                    <figure>
                        <a href="/">
                            <img src="/images/logo.png" alt="Electronics Logo" />
                        </a>
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
                    <div className={styles.sidebar}>
                        <h3>Collections</h3>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/Home">Home</a>
                            </li>
                            <li>
                                <a href="/products">Products</a>
                            </li>
                            <li>
                                <a href="kk">Sale</a>
                            </li>
                            <li>
                                <a href="kk">About us</a>
                            </li>
                            <li>
                                <a href="kk">Contact us</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.cart}>
                        <a href="">
                            <i className="fa fa-shopping-cart"></i>Cart : 2 item(s)
                        </a>
                    </div>
                </div>
            </section>
        </header>
    );
}
