import React, {Component, useState, useEffect} from 'react';
import * as d3 from "d3";

export default class LineChart extends Component {

  componentDidMount() {

    // data
    const data = [
      {x: 0, y: 32},
      {x: 1, y: 28},
      {x: 2, y: 36},
      {x: 3, y: 41},
      {x: 4, y: 38},
      {x: 5, y: 49},
      {x: 6, y: 55}
    ];


    // margin
    const margin = {top: 20, right: 20, bottom: 40, left: 50};

    // width height
    const width = 600 - margin.left - margin.right;
    const height = 360 - margin.top - margin.bottom;

    // xScale yScale
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);

    // xAxis yAxis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);


    // area
    // const areaGenerator = d3.area().x([x]).y0([y]).y1([y])
    const areaGenerator = d3.area()
      .x(d => xScale(d.x))
      .y0(height)
      .y1(d => yScale(d.y));

    const getColor = d3.schemeCategory10;

    console.log("getColor", getColor);

    const svg = d3.select('svg#lineChart').attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('path')
      .attr('class', 'path area')
      .datum(data)
      .attr('d', areaGenerator)
      .style('fill', getColor[0])

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);
  }

  render() {
    return(
      <div>
        <svg id="lineChart"></svg>
      </div>
    )
  }
}
