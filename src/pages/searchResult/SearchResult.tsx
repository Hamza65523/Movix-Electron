import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import { SearchResultData } from "./search.interface";


const SearchResult: React.FC = () => {
    const [data, setData] = useState<SearchResultData | null>(null);
    const [pageNum, setPageNum] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const { query } = useParams<{ query: string }>();
  
    const fetchInitialData = () => {
      setLoading(true);
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
        (res: SearchResultData) => {
          setData(res);
          setPageNum((prev) => prev + 1);
          setLoading(false);
        }
      );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
          (res: SearchResultData) => {
            if (data?.results) {
              setData({
                ...data,
                results: [...data?.results, ...res.results],
              });
            } else {
              setData(res);
            }
            setPageNum((prev) => prev + 1);
          }
        );
      };
    

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="searchResultsPage">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <ContentWrapper>
                    {data&&data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || 0}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default SearchResult;
