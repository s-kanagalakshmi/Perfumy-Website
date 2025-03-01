import React from "react";
import "./ImagesComponent.css"
import img1 from "./assets/Images/img-1.jpg";
import img2 from "./assets/Images/img-2.jpg";
import img3 from "./assets/Images/img-3.jpg";




const ImagesComponent = () => {
    return (
        <>
            <div className="imgBar">
                <div className="img1">
                <img src={img1} alt="Perfume 1" />

                    <p>Ralph lauren Polo Blue For Men
                        from Rs. 5,400</p></div>
                <div className="img1">
                <img src={img2} alt="Perfume 1" />
                <p>Elizabeth Arden Sunflowers Dream Petals For Women</p></div>
                <div className="img1">  
                <img src={img3} alt="Perfume 1" />
                <p>Calvin Klein CK Eternity Eau De Parfum For Men</p></div>

            </div>
        </>
    )
}
export default ImagesComponent