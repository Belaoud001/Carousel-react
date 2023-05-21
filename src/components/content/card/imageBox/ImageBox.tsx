import MusashiImage from "../../../../assets/sg_logo.png"

import './imagebox.css'

export const ImageBox = () => {
    return (
        <div className="image-box">
            <img src={MusashiImage} alt=""/>
        </div>
    );
}