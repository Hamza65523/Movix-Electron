import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";

interface Params {
    id?: string;
}
const Details: React.FC = () => {
    const { id }: Params = useParams();
    const { data } = useFetch(`/movie/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/movie/${id}/credits`
    );

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
        </div>
    );
};

export default Details;
