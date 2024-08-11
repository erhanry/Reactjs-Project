import { useParams } from "react-router-dom";

import ProductArticle from "../ProductArticle/ProductArticle";
import Pagination from "../pagination/Pagination";

import { useGetPaginationProducts, useGetProductsCount } from "../../hooks/useProduct";

export default function Products() {
    const pagination_limit = 4;

    let { pageId = 1 } = useParams();
    let products_count = useGetProductsCount();
    const base_path = "products";

    const products = useGetPaginationProducts(pagination_limit, pageId);

    return (
        <>
            <h5 className="main_heading">Products</h5>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => <ProductArticle key={product._id} {...product} />)
                ) : (
                    <h4>No Products yet</h4>
                )}
            </div>
            {products.length > 0 && <Pagination {...{ pagination_limit, products_count, pageId, base_path }} />}
        </>
    );
}
