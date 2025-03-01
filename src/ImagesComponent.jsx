import React from "react";
import "./ImagesComponent.css"
const ImagesComponent = () => {
    return (
        <>
            <div className="imgBar">
                <div className="img1">
                     <img src="./src/assets/img-1.jpg"></img>
                    <p>Ralph lauren Polo Blue For Men
                        from Rs. 5,400</p></div>
                <div className="img1">
                     <img src="./src/assets/img-2.jpg"></img>
                    <p>Elizabeth Arden Sunflowers Dream Petals For Women</p></div>
                <div className="img1">  
                     <img src="./src/assets/img-3.jpg"></img>
                    <p>Calvin Klein CK Eternity Eau De Parfum For Men</p></div>

            </div>
        </>
    )
}
export default ImagesComponent