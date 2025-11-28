import React, { useEffect, useState } from 'react';

const BarFillerItem = ({ title, percentage, duration = 5000, barColor = "#FF9D4D" }) => {
    const [fillWidth, setFillWidth] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFillWidth(percentage);
        }, 100);
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
        <>
            <div className="single-bar-item">
                <h5>{title}</h5>
                <div className="bar-parcentage">{percentage}%</div>
            </div>
            <div className="barfiller">
        <span
            className="fill"
            style={{
                width: `${fillWidth}%`,
                backgroundColor: barColor,
                transition: `width ${duration}ms ease-in-out`
            }}
        ></span>
            </div>
        </>
    );
};

export default BarFillerItem;
