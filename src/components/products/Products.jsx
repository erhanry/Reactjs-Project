import ProductArticle from "./ProductArticle";

import { useGetAllProducts } from "../../hooks/useProduct";

export default function Products() {
    const products = useGetAllProducts();

    return (
        <>
            <h5 className="main_heading">Products</h5>
            <div className="product-list">
                {products ? (
                    products.map((product) => <ProductArticle key={product._id} {...product} />)
                ) : (
                    <h4>No Products yet</h4>
                )}
            </div>
        </>
    );
}
