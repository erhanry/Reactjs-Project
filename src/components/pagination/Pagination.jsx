import { Link } from "react-router-dom";

import styles from "./Pagination.module.css";

export default function Paginsation({ pagination_limit, products_count, pageId }) {
    pageId = Number(pageId);

    const last_product = pageId * pagination_limit;

    const to = last_product > products_count ? products_count : last_product;
    const from = (pageId - 1) * pagination_limit + 1;

    const page_count = Math.ceil(products_count / pagination_limit);
    const prev_page = pageId > 1 ? pageId - 1 : 0;
    const next_page = page_count > pageId ? pageId + 1 : 0;

    return (
        <div className={styles.pagination}>
            <p className={styles.products_count}>
                {from} - {to} products of {products_count}
            </p>

            <ul className={styles.list}>
                {prev_page > 0 && (
                    <li>
                        <Link to={`/products/${prev_page}/page`}>{prev_page}</Link>
                    </li>
                )}
                <li>
                    <p className={styles.current}>{pageId}</p>
                </li>
                {next_page > 0 && (
                    <li>
                        <Link to={`/products/${next_page}/page`}>{next_page}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
