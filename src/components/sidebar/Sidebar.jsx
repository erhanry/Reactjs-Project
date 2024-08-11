import { NavLink } from "react-router-dom";

import { useProductContext } from "../../context/ProductContext";

import styles from "./Sidebar.module.css";
import { useGelAllCategory } from "../../hooks/useProduct";

export default function Sidebar() {
    useGelAllCategory();

    const { categorys } = useProductContext();

    return (
        <ul className={styles.sidebar}>
            {categorys?.length > 0 &&
                categorys.map((category) => (
                    <li key={category._id}>
                        <NavLink
                            to={`/category/${category.path}`}
                            title={category.title}
                            className={({ isActive }) => (isActive ? styles.active : "")}
                        >
                            {category.title}
                        </NavLink>
                    </li>
                ))}
        </ul>
    );
}
