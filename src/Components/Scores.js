import React from "react";
function Score(props) {
    return (
        <span>{`${props.label} : ${props.value}`}</span>
    )
}
export default Score;