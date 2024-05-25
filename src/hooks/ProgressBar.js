import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar({percentage}) {
    let [perc, setPerc] = useState(0);
    useEffect(() => {
        setPerc(percentage)
    }, [percentage]);
    return(
        <div className="progress-bar">
            <div className="progress" style={{width: `${perc}%`}}>
            </div>
            <span className="progress-text">{percentage}</span>
        </div>
    )
}

export default ProgressBar;