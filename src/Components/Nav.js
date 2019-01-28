import React from "react";
import Score from "./Scores.js"
function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="row navRow pt-3 pb-3 text-center">
                <div className="col-3">
                    <span>Clicky Game</span>
                </div>
                <div className="col-3">
                    <span>Click an image!</span>
                </div>
                <div className="col-6">
                    <span>
                        <Score label="Score" value={props.score}></Score> |
                        <Score label="Top Score" value={props.topScore}></Score>
                    </span>
                </div>
            </div>
        </nav>
    )
}
export default Nav;