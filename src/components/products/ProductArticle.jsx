import { Link } from "react-router-dom";

export default function ProductArticle({ _id, title, availability, imgUrl, description }) {
    return (
        <article>
            <figure>
                <Link to={`/products/${_id}/details`}>
                    <img src={imgUrl} alt={title} />
                </Link>
            </figure>
            <Link className="title" to={`/products/${_id}/details`}>
                {title}
            </Link>
            <p className="amount">{availability} products</p>
            <p className="description">{description}</p>
            <Link className="btn" to={`/products/${_id}/details`}>
                View products
            </Link>
        </article>
    );
}
