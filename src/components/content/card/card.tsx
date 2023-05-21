import {ImageBox} from "./imageBox/ImageBox";
import {News} from "./news/news";

import './card.css'

export const Card = () => {
    return (
        <div className="card">
            <ImageBox />
            <News />
        </div>
    );
}