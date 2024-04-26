import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 0, bottom: 50, left: 30 };
const initialWidth = 700; // Default starting width
const initialHeight = 400; // Default starting height
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data1 = [
  { x: 1, y: 90 },
  { x: 2, y: 12 },
  { x: 3, y: 34 },
  { x: 4, y: 53 },
  { x: 5, y: 52 },
  { x: 6, y: 9 },
  { x: 7, y: 18 },
  { x: 8, y: 78 },
  { x: 9, y: 28 },
  { x: 10, y: 34 },
  { x: 11, y: 60 },
  { x: 12, y: 25 },
];
const data2 = [
  { x: 1, y: 20 },
  { x: 2, y: 80 },
  { x: 3, y: 50 },
  { x: 4, y: 60 },
  { x: 5, y: 30 },
  { x: 6, y: 70 },
  { x: 7, y: 90 },
  { x: 8, y: 40 },
  { x: 9, y: 50 },
  { x: 10, y: 75 },
  { x: 11, y: 45 },
  { x: 12, y: 10 },
];

export const LineChart = () => {
  const [chartDimensions, setChartDimensions] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      let width = 700;
      let height = 400; // Default height

      if (containerWidth > 1200) {
        width = 650;
      } else if (containerWidth > 900) {
        width = 550;
      } else if (containerWidth > 500) {
        width = 450;
      } else if (containerWidth > 400) {
        width = 300;
      } else {
        width = 300;
      }

      setChartDimensions({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = chartDimensions;
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(
    () => d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0]),
    [boundsHeight]
  );

  const xScale = useMemo(
    () => d3.scaleBand().domain(months).range([0, boundsWidth]).padding(0.1),
    [boundsWidth]
  );

  const axesRef = useRef(null);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    // X Axis
    const xAxisGenerator = d3.axisBottom(xScale).tickSize(0);
    const xAxis = svgElement
      .append("g")
      .attr("transform", `translate(0,${boundsHeight})`)
      .call(xAxisGenerator);
    xAxis.selectAll(".domain").remove();
    xAxis.selectAll("text").style("fill", "#CCCED5").attr("dy", "1em");

    // Y Axis
    const yAxisGenerator = d3
      .axisLeft(yScale)
      .tickValues(d3.range(0, 101, 20))
      .tickSize(0);
    const yAxis = svgElement.append("g").call(yAxisGenerator);
    yAxis.selectAll(".domain").remove();
    yAxis.selectAll("text").style("fill", "#CCCED5").attr("dx", "-0.3em");

    // Horizontal dotted lines
    yAxis
      .selectAll(".tick")
      .append("line")
      .classed("grid-line", true)
      .attr("x2", boundsWidth)
      .attr("stroke", "#ccc")
      .attr("stroke-dasharray", "2,2")
      .attr("opacity", 0.7);
  }, [xScale, yScale, boundsHeight, boundsWidth]);

  const lineGenerator = d3
    .line()
    .x((d) => xScale(months[d.x - 1]) + xScale.bandwidth() / 2)
    .y((d) => yScale(d.y))
    .curve(d3.curveMonotoneX);
  const linePath1 = lineGenerator(data1);
  const linePath2 = lineGenerator(data2);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          <path d={linePath1} stroke="green" fill="none" strokeWidth={2} />
          <path d={linePath2} stroke="#FF4045" fill="none" strokeWidth={2} />
          <g ref={axesRef}></g>
        </g>
      </svg>
    </div>
  );
};
