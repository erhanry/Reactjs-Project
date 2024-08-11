export const getCookie = (key) => {
    const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(key))
        ?.split("=")[1];

    return authCookie;
};

export const clearCookie = (key) => {
    document.cookie.split("; ").find((row) => row.startsWith(key));

    return null;
};
