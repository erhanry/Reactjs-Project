import { NavLink } from "react-router-dom";
import { useGelAllCategory } from "../../hooks/useCategory";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
    const categorys = useGelAllCategory();

    return (
        <ul className={styles.sidebar}>
            {categorys.map((category) => (
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
