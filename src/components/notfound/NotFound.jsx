import { Link } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";

export default function NotFound() {
    return (
        <div className="NotFound">
            <Sidebar />
            <article>
                <h4>404 Page Not Found</h4>
                <p>
                    The page you requested does not exist. Click <Link to="/">here</Link> to continue shopping.
                </p>
            </article>
        </div>
    );
}
