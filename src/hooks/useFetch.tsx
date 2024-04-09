import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url: string): any => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean | string | null>("loading...");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res: any) => {
                setLoading(false);
                setData(res);
            })
            .catch((err: Error) => {
                setLoading(false);
                setError("Something went wrong!"+err.message);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
