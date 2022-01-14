import React from "react";
import { Rectangle } from "recharts";

/**
 * Created the rectangle component according to the chart props to be displayed after the active point.
 * @param {object} props chart data
 * @returns {Component} Rectangle fill with red color
 */

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="#ad0606"
      stroke="#f80000"
      opacity="0.2"
      x={x}
      y={y - 5}
      width={width + 30}
      height={height + 40}
    />
  );
};

export default CustomCursor;
