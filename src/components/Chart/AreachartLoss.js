import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 0, right: 0, bottom: 0, left: 0 };

export const AreachartLoss = ({ width, height }) => {
  const data = [
    { x: 1, y: 40 }, { x: 2, y: 50 }, { x: 3, y: 60 }, { x: 4, y: 35 },
    { x: 5, y: 45 }, { x: 6, y: 30 }, { x: 7, y: 40 }, { x: 8, y: 42 },
    { x: 9, y: 39 }, { x: 10, y: 25 }, { x: 11, y: 42 }, { x: 12, y: 39 },
    { x: 13, y: 36 }, { x: 14, y: 20 }, { x: 15, y: 41 }, { x: 16, y: 42 }
  ];

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(() => d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y) || 0])
    .range([boundsHeight, 0]), [data, height]);

  const xScale = useMemo(() => d3.scaleLinear()
    .domain([d3.min(data, d => d.x) || 0, d3.max(data, d => d.x) || 0])
    .range([0, boundsWidth]), [data, width]);

  const area = d3.area()
    .x(d => xScale(d.x))
    .y0(boundsHeight)
    .y1(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

  const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="100%">
            <stop offset="0%"  stopColor="#E9A2A2" />
            <stop offset="29%" stopColor="#F60000" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="29%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#333C57" />
          </linearGradient>
        </defs>
        <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
          <path d={area(data)} fill="url(#areaGradient)" fillOpacity={0.4}  opacity={1}
      stroke="none" />
          <path d={line(data)} stroke="url(#lineGradient)" fill="none" strokeWidth={1} />
        </g>
      </svg>
    </div>
  );
};
