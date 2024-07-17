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
                                <a href="/Home">Home</a>
                            </li>
                            <li>
                                <a href="/Search">Search</a>
                            </li>
                            <li>
                                <a href="/About">About Us</a>
                            </li>
                            <li>
                                <a href="/Contact">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h5>Product</h5>
                        <ul>
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
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
