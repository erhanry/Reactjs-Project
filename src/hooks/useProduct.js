import { useEffect, useState } from "react";

import request from "../api/requester";

export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await request.get("/product");
            setProducts(result);
        })();
    }, []);

    return products;
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await request.get(`/product/${productId}`);
            setProduct(result);
        })();
    }, [productId]);

    return product;
}
