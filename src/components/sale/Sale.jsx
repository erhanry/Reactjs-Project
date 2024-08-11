import { Link, useParams } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import ProductArticle from "../ProductArticle/ProductArticle";

import { useGetPaginationProducts, useGetProductsCount } from "../../hooks/useProduct";

import styles from "./Sale.module.css";
import Pagination from "../pagination/Pagination";

export default function Sale() {
    const pagination_limit = 1;

    let { pageId = 1 } = useParams();
    let products_count = useGetProductsCount();

    const products = useGetPaginationProducts(pagination_limit, pageId);
    const base_path = `sale`;
    return (
        <>
            <div className={styles.home_list}>
                <Sidebar />
                <div>
                    <h5 className="main_heading">All Products</h5>
                    <div className="product-list">
                        {products.length > 0 ? (
                            products.map((product) => <ProductArticle key={product._id} {...product} />)
                        ) : (
                            <h4>No Products yet</h4>
                        )}
                    </div>
                    {products.length > 0 && <Pagination {...{ pagination_limit, products_count, pageId, base_path }} />}
                </div>
            </div>
        </>
    );
}
