import { FC } from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";

const Home: FC = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
        </div>
    );
};

export default Home;
