import  React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./style.scss";
import {GenresProps} from './Genres'


const Genres: FC<GenresProps> = ({ data }) => {
    const genres = useSelector((state: RootState) => state.home.genres);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return null;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;
