import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";
import { CircleRatingProps } from "./CircleRating.type";


const CircleRating: FC<CircleRatingProps> = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating.toString()} // Ensure text is a string
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;
