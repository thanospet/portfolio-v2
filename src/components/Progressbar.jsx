import React, { useState, useEffect } from "react";
import classNames from "classnames";

const ProgressBar = ({ skill }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(skill * 20);
  }, [skill]);

  const colors = [
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-green-400",
    "bg-green-500",
  ];

  const getColor = () => {
    if (percent <= 20) {
      return colors[0];
    } else if (percent <= 40) {
      return colors[1];
    } else if (percent <= 60) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const barClasses = classNames("h-3 rounded-full", getColor());

  return (
    <div className="w-full h-3 bg-gray-300 rounded-md white">
      <div className={barClasses} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
