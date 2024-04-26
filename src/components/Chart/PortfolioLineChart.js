import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 0, bottom: 50, left: 30 };
const initialWidth = 700; // Default starting width
const initialHeight = 400; // Default starting height
const months = ["6 AM", "9 AM", "12 AM", "2 PM", "5 PM", "8 PM"];

const data = [
  { x: 1, y: 90 }, { x: 2, y: 12 }, { x: 3, y: 34 }, { x: 4, y: 53 },
  { x: 5, y: 52 }, { x: 6, y: 9 }
];

export const PortfolioLineChart = () => {
  const [chartDimensions, setChartDimensions] = useState({ width: initialWidth, height: initialHeight });

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
        width = 400;
      } else {
        width = 260;
      }

      setChartDimensions({ width, height });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { width, height } = chartDimensions;
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(() => d3.scaleLinear()
    .domain([0, 100])
    .range([boundsHeight, 0]), [boundsHeight]);

  const xScale = useMemo(() => d3.scaleBand()
    .domain(months)
    .range([0, boundsWidth])
    .padding(0.1), [boundsWidth]);

  const axesRef = useRef(null);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    // Axes
    const xAxisGenerator = d3.axisBottom(xScale).tickSize(0);
    const xAxis = svgElement.append("g").attr("transform", `translate(0,${boundsHeight})`).call(xAxisGenerator);
    xAxis.selectAll(".domain").remove();
    xAxis.selectAll("text").style("fill", "#CCCED5").attr("dy", "1em");

    const yAxisGenerator = d3.axisLeft(yScale).tickValues(d3.range(0, 101, 20)).tickSize(0);
    const yAxis = svgElement.append("g").call(yAxisGenerator);
    yAxis.selectAll(".domain").remove();
    yAxis.selectAll("text").style("fill", "#CCCED5").attr("dx", "-0.3em");

    // Grid lines
    yAxis.selectAll(".tick").append("line")
      .classed("grid-line", true)
      .attr("x2", boundsWidth)
      .attr("stroke", "#ccc")
      .attr("stroke-dasharray", "2,2")
      .attr("opacity", 0.7);

    // Dots
    svgElement.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(months[d.x - 1]) + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.y))
      .attr("r", 5)
      .attr("fill", "#0062FF");

  }, [xScale, yScale, boundsHeight, boundsWidth]);

  const lineGenerator = d3.line()
    .x(d => xScale(months[d.x - 1]) + xScale.bandwidth() / 2)
    .y(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

  const areaGenerator = d3.area()
    .x(d => xScale(months[d.x - 1]) + xScale.bandwidth() / 2)
    .y0(boundsHeight)
    .y1(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

  const linePath = lineGenerator(data);
  const areaPath = areaGenerator(data);

  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="areaGradient" gradientTransform="rotate(180)">
            <stop offset="0%" stop-color="#004BDE" />
            <stop offset="100%" stop-color="rgba(0, 136, 234, 0.16)" />
          </linearGradient>
        </defs>
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          <path d={areaPath} fill="url(#areaGradient)" opacity="0.3" />
          <path d={linePath} stroke="#0062FF" fill="none" strokeWidth={2} />
          <g ref={axesRef}></g>
        </g>
      </svg>
    </div>
  );
};
