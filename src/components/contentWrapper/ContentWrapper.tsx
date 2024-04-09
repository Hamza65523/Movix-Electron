import { FC } from "react";

import "./style.scss";
import { ContentWrapperProps } from "./ContentWrapper.type";


const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
