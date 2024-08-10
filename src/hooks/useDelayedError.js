import { useEffect, useState } from "react";

export function useDelayedError(initialError, milliseconds = 3000) {
    const [error, setDelayError] = useState(initialError);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDelayError(initialError);
        }, milliseconds);

        return () => clearTimeout(timeoutId);
    }, [error]);

    const setError = (newerror) => {
        setDelayError(newerror);
    };

    return {
        error,
        setError,
    };
}
