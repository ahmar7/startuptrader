import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 0, right: 0, bottom: 0, left: 0 };





export const AreaChart = ({width,height,color1,color2}) => {

  const data = [
    {x:1, y: 40},
    {x: 2, y: 50},
    {x: 3, y: 60},
    {x: 4, y: 35},
    {x: 5, y: 45},
    {x: 6, y: 30},
    {x: 7, y: 40},
    {x: 8, y: 42},
    {x: 9, y: 39},
    {x: 10, y: 25},
    {x: 11, y: 42},
    {x: 12, y: 39},
    {x: 13, y: 36},
    {x: 14, y: 20},
    {x: 15, y: 41},
    {x: 16, y: 42},
    
    
    
]

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([xMin || 0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);




  // Build the line
  const areaBuilder = d3
    .area()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0)).curve(d3.curveMonotoneX);;
  const areaPath = areaBuilder(data);

  // Build the line
  const lineBuilder = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y)).curve(d3.curveMonotoneX);;
  const linePath = lineBuilder(data);

  if (!linePath || !areaPath) {
    return null;
  }

  return (
    <div>
     <svg width={width} height={height}>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={color1} />
      <stop offset="29%" stopColor={color2} />
      
    </linearGradient>
  </defs>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FFFFFF" /> {/* White */}
      <stop offset="29%" stopColor="#FFFFFF" /> {/* White */}
      <stop offset="100%" stopColor="#333C57" /> {/* Green */}
    </linearGradient>
  </defs>
  <g
    width={boundsWidth}
    height={boundsHeight}
    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
  >
    <path
      d={areaPath}
      opacity={1}
      stroke="none"
      fill="url(#gradient1)"
      fillOpacity={0.4}
    />
    <path
      d={linePath}
      opacity={1}
      stroke="url(#gradient)" 
      fill="none"
      strokeWidth={2}
    />
  </g>

</svg>

    </div>
  );
};
