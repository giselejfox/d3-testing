import React, { useState, useRef, useEffect  } from "react"
import * as d3 from 'd3'
import { sampleFruitData } from "../data/sampleFruitData"

export default function SampleBarChart() {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <a className="btn btn-primary my-4" href="https://www.youtube.com/watch?v=hOzKr8H_438">Link to Original Video Tutorial</a>
            <BarChart />
        </div>
    )


}

// Returns an svg of a bar chart
function BarChart() {
    const [data, setData] = useState(sampleFruitData)
    const svgRef = useRef()

    useEffect(() => {
        // Setting up svg container
        const width = 400
        const height = 350

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible')


        // Setting up the scaling
        const xScale = d3.scaleBand()
            // .domain(data.map((value, index) => index))
            .domain(data.map((value) => value.type)) // If it's value, we have to do the .join .attr(x) xScale(_) to be value
            // .domain(['test', 'second', 'third', 'another', 'bet', 'umhehe'])
            .range([0, width])
            .padding(.5)

        const yScale = d3.scaleLinear()
            .domain([0, height])
            .range([height, 0])

        // Setting up the Axis
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`)
        svg.append('g')
            .call(yAxis)

        // Setting the svg data
        svg.selectAll('.bar')
            .data(data.map((option) => option.price))
            .join('rect')
                .attr('x', (value, index) => xScale(data[index].type))
                .attr('y', yScale)
                .attr('width', xScale.bandwidth())
                .attr('height', val => height - yScale(val))

    }, [data])

    return (
        <svg className="mt-4" ref={svgRef}></svg>
    )
}