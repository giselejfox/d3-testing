import React from 'react';
import { arc } from 'd3'

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

export function D3ReactCourse() {

    let mouthArc = arc()
        .innerRadius(0)
        .outerRadius(100)
        .startAngle(0)
        .endAngle(Math.PI / 2)

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
            <circle
                r={centerY - strokeWidth / 2}
                fill="yellow"
                stroke="black"
                stroke-width={strokeWidth}
            />
            <circle
                cx={-eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <circle
                cx={eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            </g>
        </svg>
    )
}