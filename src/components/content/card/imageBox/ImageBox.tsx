import MusashiImage from "../../../../assets/anime.jpg"

import './imagebox.css'

export const ImageBox = () => {
    return (
        <div className="image-box">
            <img src={MusashiImage} alt=""/>
        </div>
    );
}