// import { useParams } from "react-router-dom";
// import { useGetAllProducts, useGetOneProduct } from "../../hooks/useProduct";
import ProdictArticle from "./ProdictArticle";

export default function Products() {
    // const { producrId } = useParams();

    // const [products] = useGetAllProducts();
    // const [product] = useGetOneProduct(producrId);

    // console.log(products);
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
