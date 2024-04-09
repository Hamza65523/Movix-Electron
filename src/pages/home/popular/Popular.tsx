import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";
// import { Movie } from "../../../types";

const Popular: React.FC = () => {
    const { data, loading } = useFetch("/movie/popular");

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Popular;
