import { useEffect, useState } from "react";

import request from "../api/requester";

import { useProductContext } from "../context/ProductContext";

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

export function useGetHomeProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await request.get("/product/last/6");
            setProducts(result);
        })();
    }, []);

    return products;
}

export function useGetProductsCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            const result = await request.get("/product/count");
            setCount(result.count);
        })();
    }, []);

    return count;
}

export function useGetPaginationProducts(limit, page) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await request.get(`/product/${limit}/limit/${page}/page`);
                setProducts(result);
            } catch {
                setProducts([]);
            }
        })();
    }, [page]);

    return products;
}

export function useGetProductsWithCategory(categoryId) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                if (!categoryId) {
                    throw "";
                }

                const result = await request.get(`/product/category/${categoryId}`);
                setProducts(result);
            } catch {
                setProducts([]);
            }
        })();
    }, [categoryId]);

    return products;
}

export function useGelAllCategory() {
    const { changeProductState } = useProductContext();

    useEffect(() => {
        (async () => {
            const result = await request.get("/category");
            changeProductState((oldState) => ({ ...oldState, categorys: result }));
        })();
    }, []);
}
