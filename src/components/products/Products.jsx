import ProdictArticle from "./ProdictArticle";

export default function Products() {
    return (
        <>
            <h5 className="main_heading">Products</h5>
            <div className="product-list">
                <ProdictArticle />
                <ProdictArticle />
                <ProdictArticle />
                <ProdictArticle />
                <ProdictArticle />
            </div>
        </>
    );
}
