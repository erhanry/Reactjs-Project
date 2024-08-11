import { useParams } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import ProductArticle from "../ProductArticle/ProductArticle";

import { useGetProductsWithCategory } from "../../hooks/useProduct";

import styles from "./Category.module.css";
import { useProductContext } from "../../context/ProductContext";

export default function Category() {
    const { categoryPath } = useParams();
    const { findCategory } = useProductContext();

    const category = findCategory(categoryPath);
    const selectedProducts = useGetProductsWithCategory(category?._id);

    return (
        <div className={styles.category_list}>
            <Sidebar />
            <div>
                <h5 className="main_heading">{category?.title} Products</h5>

                <div className="product-list">
                    {selectedProducts.length > 0 ? (
                        selectedProducts.map((product) => <ProductArticle key={product._id} {...product} />)
                    ) : (
                        <h4>No Products yet</h4>
                    )}
                </div>
            </div>
        </div>
    );
}
