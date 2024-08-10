import { useEffect, useState } from "react";

import request from "../api/requester";

export function useGelAllCategory() {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await request.get("/category");
            setCategorys(result);
        })();
    }, []);

    return categorys;
}
