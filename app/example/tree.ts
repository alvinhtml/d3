import * as d3 from 'd3'
import nodes from './tree-nodes'

console.log('d3', d3)

function initTree(width: number, height: number) {
  d3.hierarchy(nodes)
}

initTree(100, 100)
