import * as d3 from 'd3'

const str = 'China'
const root = d3.select('#root')
root.append('p')
const p = root.selectAll('p')
p.datum(str)

p.text(function (d, i) {
  return `第${i}个元素绑定的数据是${d}`
})
