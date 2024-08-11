const VITE_PROXY_API_TARGET = import.meta.env.VITE_PROXY_API_TARGET || "http://localhost:5000/api";

const requester = async (method, url, data) => {
    const options = {
        method,
        credentials: "include",
    };

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${VITE_PROXY_API_TARGET}${url}`, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    return result;
};

const request = {
    get: requester.bind(null, "GET"),
    post: requester.bind(null, "POST"),
    put: requester.bind(null, "PUT"),
    delete: requester.bind(null, "DELETE"),
    patch: requester.bind(null, "PATCH"),
};

export default request;
