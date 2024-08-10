import { Link } from "react-router-dom";
import { useGetHomeProducts } from "../../hooks/useProduct";
import ProductArticle from "../products/ProductArticle";
import Sidebar from "../sidebar/Sidebar";

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
                            <img
                                src="//theme188-electronics.myshopify.com/cdn/shop/t/2/assets/custom_showcase1_img.png?v=96945709399638749351437466315"
                                alt=""
                            />
                        </div>
                    </Link>

                    <Link to={``}>
                        <div className={`${styles.content} ${styles.second}`}>
                            <section>
                                <h4>Home appliances</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                                <span>Shop now!</span>
                            </section>
                            <img
                                src="//theme188-electronics.myshopify.com/cdn/shop/t/2/assets/custom_showcase2_img.png?v=170087416945449932351437466315"
                                alt=""
                            />
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
