import { Link } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import ProductArticle from "../ProductArticle/ProductArticle";

import { useGetHomeProducts } from "../../hooks/useProduct";

import styles from "./Home.module.css";

export default function Home() {
    const products = useGetHomeProducts();

    return (
        <div className={styles.home_list}>
            <Sidebar />
            <div>
                <div className={styles.row}>
                    <Link to={`category/tvs`}>
                        <div className={`${styles.content} ${styles.first}`}>
                            <section>
                                <h4>TV &amp; Video</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                                <span>Shop now!</span>
                            </section>
                            <img src="/images/custom_showcase1_img.avif" alt="Case 1" />
                        </div>
                    </Link>

                    <Link to={"category/household"}>
                        <div className={`${styles.content} ${styles.second}`}>
                            <section>
                                <h4>Home appliances</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                                <span>Shop now!</span>
                            </section>
                            <img src="/images/custom_showcase2_img.avif" alt="Case 2" />
                        </div>
                    </Link>
                </div>

                <h5 className="main_heading">Featured Products</h5>
                <div className="product-list">
                    {products.length > 0 ? (
                        products.map((product) => <ProductArticle key={product._id} {...product} />)
                    ) : (
                        <h4>No Products yet</h4>
                    )}
                </div>
            </div>
        </div>
    );
}
