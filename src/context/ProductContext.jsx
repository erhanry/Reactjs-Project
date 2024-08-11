import { createContext, useContext, useState } from "react";

export const ProductContext = createContext({
    categorys: [],
    cartItems: [],
    findCategory: () => null,
    changeProductState: () => null,
});

export function ProductContextProvider(props) {
    const [categoryState, setCategoryState] = useState();

    const changeProductState = (state) => {
        setCategoryState(state);
    };

    const findCategory = (path) => {
        const category = categoryState?.categorys?.find((item) => item.path === path);

        return category;
    };

    const contexData = {
        categorys: categoryState?.categorys,
        cartItems: [],
        findCategory,
        changeProductState,
    };

    return <ProductContext.Provider value={contexData}>{props.children}</ProductContext.Provider>;
}

export const useProductContext = () => {
    const context = useContext(ProductContext);

    return context;
};
