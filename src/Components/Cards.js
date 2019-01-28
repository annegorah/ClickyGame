import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="cardContainer">
                <img
                    onClick={() => props.ImageClick(props.id)}
                    className="characterImage"
                    src={"/assets/img/" + props.image}
                    alt="actriz"></img>
            </div>
        </div>
    )
}
export default Card;