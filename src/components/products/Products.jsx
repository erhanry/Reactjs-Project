import ProductArticle from "./ProductArticle";

export default function Products() {
    return (
        <>
            <h5 className="main_heading">Products</h5>
            <div className="product-list">
                <ProductArticle />
                <ProductArticle />
                <ProductArticle />
                <ProductArticle />
                <ProductArticle />
            </div>
        </>
    );
}
