import  { useState, useEffect, FC, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { RootState } from "../../../store/store.type";
import { HomeState } from "../../../store/home.type";

const HeroBanner: FC = () => {
    const [background, setBackground] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();
    const home :HomeState = useSelector((state: RootState) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg: string =
        home.url.backdrop +
            (data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path ?? "");
        setBackground(bg);
    }, [data, home?.url]);

    const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
