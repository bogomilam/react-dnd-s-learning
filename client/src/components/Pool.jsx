import React from "react";

const Pool = ({ isOver, children }) => {
    const className = isOver ? " highlight-region" : "";

    return (
        <div className={`col${className}`}>
            {children}
        </div>
    );
};

export default Pool;