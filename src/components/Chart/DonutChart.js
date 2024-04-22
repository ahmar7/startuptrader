import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = 20;

const width = 300;
const height = 250;

export const DonutChart = ({data,colors}) => {
  const radius = Math.min(width, height) / 2 - MARGIN;
  const innerRadius = 90; // Define a consistent inner radius for all arcs

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value).sort(null); // Sorting to ensure consistent rendering
    return pieGenerator(data);
  }, [data]);

  const arcPathGenerator = useMemo(() => {
    return d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(10); // Add rounded corners here
  }, [radius, innerRadius]);

  const arcs = useMemo(() => {
    return pie.map((p) => arcPathGenerator(p));
  }, [pie, arcPathGenerator]);

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => (
          <path key={i} d={arc} fill={colors[i % colors.length]} />
        ))}
       <text
  x="0"
  y="0"
  textAnchor="middle"
  alignmentBaseline="middle"
  fill="#333" 
  fontFamily="manrope"
  fontSize="14"
>
  <tspan x="0" fontSize="32" fontWeight={700}fill="#FFFFFF" dy="0">3</tspan> 
  <tspan x="0" dy="1.2em" fontWeight={400} fontSize={'18'} fill="#CCCED5">Total Industries</tspan> 
</text>

      
      </g>
    </svg>
  );
};
