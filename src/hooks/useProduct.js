import { useEffect, useState } from "react";

import request from "../services/requester";

export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await request.get("/product");
            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await request.get(`/product/${productId}`);
            setProduct(result);
        })();
    }, [productId]);

    return [product, setProduct];
}
