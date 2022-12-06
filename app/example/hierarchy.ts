import * as d3 from 'd3'

const container = document.querySelector('#root') as HTMLDivElement

container.innerHTML = `
<div class="container">
  <style>
    html, body {
      margin: 0px;
      background: #32333b;
      height: 100%;
      font-family: sans-serif;
      font-size: 0.9rem;
    }
    
    .container {
      padding: 40px;
      display: flex;
      flex-flow: row wrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .wrapper {
      display: flex;
      flex-flow: column wrap;
    }
    
    .wrapper:hover .caption {
      visibility: visible;
      opacity: 1;
    }
    
    .caption {
      color: #f2f2f2;
      display: flex;
      align-items:center;
      justify-content:center;
      visibility: hidden;
      opacity: 0;
      height: 50px;
      transition : all 0.4s ease-out;
    }
    
    .label {
      text-anchor: middle;
      pointer-events : none;
    }
    
    .node {
      cursor : pointer;
    }
  </style>
  <div class="wrapper">
    <svg class="graph" id="tree" width="400" height="200" viewBox="0 0 400 240">
      <g transform="translate(10,20)">
        <g class="links"></g>
        <g class="nodes"></g>
      </g>
    </svg>
    <div class="caption">tree layout</div>
  </div>

  <div class="wrapper">
    <svg class="graph" id="cluster" width="400" height="200" viewBox="0 0 400 240">
      <g transform="translate(10,20)">
        <g class="links"></g>
        <g class="nodes"></g>
      </g>
    </svg>
    <div class="caption">cluster layout</div>
  </div>

  <div class="wrapper">
    <svg class="graph" id="treemap" width="400" height="200" viewBox="0 0 400 220">
      <g transform="translate(0,10)">
      </g>
    </svg>
    <div class="caption">treemap layout</div>
  </div>

  <div class="wrapper">
    <svg class="graph" id="pack" width="400" height="200" viewBox="0 0 400 220">
      <g transform="translate(5,10)">
      </g>
    </svg>
    <div class="caption">pack layout</div>
  </div>

  <div class="wrapper">
    <svg class="graph" id="partition" width="400" height="200" viewBox="0 0 400 220">
      <g transform="translate(5,10)">
      </g>
    </svg>
    <div class="caption">partition layout</div>
  </div>
  <div class="wrapper">
    <svg class="graph" id="partition-sunburst" width="400" height="200" viewBox="0 0 400 220">
      <g transform="translate(200,110)">
      </g>
    </svg>
    <div class="caption">sunburst layout</div>
  </div>
</div>
`

var data = {
  name: 'A1',
  children: [
    {
      name: 'B1',
      children: [
        {
          name: 'C1',
          value: 100,
        },
        {
          name: 'C2',
          value: 300,
        },
        {
          name: 'C3',
          value: 200,
        },
      ],
    },
    {
      name: 'B2',
      value: 200,
    },
  ],
}

var root = d3.hierarchy(data)

var handleEvents = function (selection: any) {
  selection
    .on('mouseover', function () {
      let g = d3.select(this)
      let n = g.select('.the-node')

      if (n.classed('solid')) {
        n.transition()
          .duration(400)
          .style('fill', 'rgba(211,0,0,0.8)')
          .attr('r', 18)
      } else {
        n.transition().duration(400).style('fill', 'rgba(211,0,0,0.8)')
      }

      g.select('.label').transition().duration(700).style('fill', 'white')
    })
    .on('mouseout', function () {
      let g = d3.select(this)
      let n = g.select('.the-node')

      if (n.classed('solid')) {
        n.transition().duration(400).style('fill', '#696969').attr('r', 14)
      } else {
        n.transition().duration(400).style('fill', 'rgba(255,255,255,0.2)')
      }
      g.select('.label').transition().duration(700).style('fill', 'black')
    })
}

/* TREE LAYOUT */

var treeLayout = d3.tree()
treeLayout.size([400, 200])
treeLayout(root)

var tree = d3.select('#tree g.nodes')

var treeNodes = tree
  .selectAll('g.node')
  .data(root.descendants())
  .enter()
  .append('g')
  .classed('node', true)
  .call(handleEvents)

treeNodes
  .append('circle')
  .classed('the-node solid', true)
  .attr('cx', (d: any) => d.x)
  .attr('cy', (d: any) => d.y)
  .attr('r', (d: any) => 14)
  .style('fill', '#696969')

treeNodes
  .append('text')
  .attr('class', 'label')
  .attr('dx', (d: any) => d.x)
  .attr('dy', (d: any) => d.y + 4)
  .text((d: any) => d.data.name)

var treeLinks = d3
  .select('#tree g.links')
  .selectAll('line.link')
  .data(root.links())
  .enter()
  .append('line')
  .classed('link', true)
  .attr('x1', (d: any) => d.source.x)
  .attr('y1', (d: any) => d.source.y)
  .attr('x2', (d: any) => d.target.x)
  .attr('y2', (d: any) => d.target.y)
  .style('stroke', '#5f5f5f')

/* CLUSTER LAYOUT */

var clusterLayout = d3.cluster().size([400, 200])(root)

var cluster = d3.select('#cluster g.nodes')

var clusterNodes = cluster
  .selectAll('g.node')
  .data(root.descendants())
  .enter()
  .append('g')
  .classed('node', true)
  .call(handleEvents)

clusterNodes
  .append('circle')
  .classed('the-node solid', true)
  .attr('cx', (d: any) => d.x)
  .attr('cy', (d: any) => d.y)
  .attr('r', 14)
  .style('fill', '#696969')

clusterNodes
  .append('text')
  .attr('class', 'label')
  .attr('dx', (d: any) => d.x)
  .attr('dy', (d: any) => d.y + 4)
  .text((d: any) => d.data.name)

var clusterLinks = d3
  .select('#cluster g.links')
  .selectAll('line.link')
  .data(root.links())
  .enter()
  .append('line')
  .classed('link', true)
  .attr('x1', (d: any) => d.source.x)
  .attr('y1', (d: any) => d.source.y)
  .attr('x2', (d: any) => d.target.x)
  .attr('y2', (d: any) => d.target.y)
  .style('stroke', '#5f5f5f')

/* TREEMAP LAYOUT  */

var treemapLayout = d3.treemap()
treemapLayout.size([400, 200])
treemapLayout.paddingOuter(20)
// treemapLayout.paddingInner(4);
/* paddingTop, paddingRight, Left and Bottom available */
treemapLayout.tile(d3.treemapSquarify.ratio(2))
/* .tile allows different tiling strategies:
   - treemapSquarify.ratio(n) (default) - using rect aspect ratio 
   - treemapSlice - tile horizontally
   - treemapDice - tile vertically
   - treemapSliceDice - alter each layer horizontal/vertical
*/

root.sum((d: any) => d.value)
treemapLayout(root)

var treemapNodes = d3
  .select('#treemap g')
  .selectAll('g')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', (d: any) => 'translate(' + [d.x0, d.y0] + ')')
  .call(handleEvents)

treemapNodes
  .append('rect')
  .classed('the-node', true)
  .attr('width', (d: any) => d.x1 - d.x0)
  .attr('height', (d: any) => d.y1 - d.y0)
  .style('fill', 'rgba(255,255,255,0.2)')
  .style('stroke', '#2f2f2f')

treemapNodes
  .append('text')
  .attr('class', 'label')
  .attr('dx', (d: any) => 12)
  .attr('dy', (d: any) => 14)
  .text((d: any) => d.data.name)

/* PACK LAYOUT */

var packLayout = d3.pack()
packLayout.size([400, 200])
packLayout.padding(10)

root.sum((d: any) => d.value)
packLayout(root)

var packNodes = d3
  .select('#pack g')
  .selectAll('g')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', (d: any) => {
    console.log('transform pack d', d)
    return 'translate(' + [d.x, d.y] + ')'
  })
  .call(handleEvents)
packNodes
  .append('circle')
  .classed('the-node', true)
  .attr('r', (d: any) => d.r)
  .style('fill', 'rgba(255,255,255,0.2)')
  .style('stroke', '#2f2f2f')

packNodes
  .append('text')
  .attr('class', 'label')
  .attr('dy', 4)
  .attr('dx', 0)
  .text((d: any) => (d.children === undefined ? d.data.name : ''))

/* PARTITION LAYOUT */

var partitionLayout = d3.partition()
partitionLayout.size([400, 200])
partitionLayout.padding(2)
root.sum((d: any) => d.value)
partitionLayout(root)

var partitionNodes = d3
  .select('#partition g')
  .selectAll('g')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', (d: any) => 'translate(' + [d.x0, d.y0] + ')')
  .call(handleEvents)

partitionNodes
  .append('rect')
  .classed('the-node', true)
  .attr('width', (d: any) => d.x1 - d.x0)
  .attr('height', (d: any) => d.y1 - d.y0)
  .style('fill', 'rgba(255,255,255,0.2)')
  .style('stroke', '#2f2f2f')

partitionNodes
  .append('text')
  .attr('class', 'label')
  .attr('dx', 12)
  .attr('dy', 14)
  .text((d: any) => d.data.name)

/* SUNBURST LAYOUT */

var sunburstLayout = d3.partition()

var radius = 100
sunburstLayout.size([2 * Math.PI, radius])
// sunburstLayout.padding(2);

var arc = d3
  .arc()
  .startAngle(function (d: any) {
    return d.x0
  })
  .endAngle(function (d: any) {
    return d.x1
  })
  .innerRadius(function (d: any) {
    return d.y0
  })
  .outerRadius(function (d: any) {
    return d.y1
  })

root.sum((d: any) => d.value)

sunburstLayout(root)

var main = d3.select('#partition-sunburst g')

var sunburstNodes = main
  .selectAll('g')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .call(handleEvents)
var paths = sunburstNodes
  .append('path')
  .attr('d', arc)
  .classed('the-node', true)
  .style('fill', 'rgba(255,255,255,0.2)')
  .style('stroke', '#2f2f2f')

var labels = sunburstNodes
  .append('text')
  .attr('class', 'label')
  .attr('transform', function (d: any) {
    return (
      'translate(' +
      arc.centroid(d) +
      /*+ ") rotate(" + computeTextRotation(d) */ ')'
    )
  })
  .attr('dx', '-4')
  .attr('dy', '.5em')
  .text(function (d: any) {
    return d.parent ? d.data.name : ''
  })

// https://bl.ocks.org/denjn5/f059c1f78f9c39d922b1c208815d18af
function computeTextRotation(d: any) {
  var angle = ((d.x0 + d.x1) / Math.PI) * 90
  return angle < 180 ? angle - 90 : angle + 90
}
