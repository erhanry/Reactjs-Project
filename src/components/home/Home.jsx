import ProductArticle from "../products/ProductArticle";
import Sidebar from "../sidebar/Sidebar";

import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home_list}>
            <Sidebar />
            <article>
                <p>fsdvdsvg</p>
                <div className="product-list">
                    <ProductArticle />
                    <ProductArticle />
                    <ProductArticle />
                </div>
            </article>
        </div>
    );
}
