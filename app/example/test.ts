import * as d3 from 'd3'

const data = {
  svg: '<g class="centerPerson"><path d="M38.9,40h-79.4c-21.2,0-38.3-17.2-38.3-38.3v0c0-21.2,17.2-38.3,38.3-38.3h79.4c21.2,0,38.3,17.2,38.3,38.3v0C77.2,22.8,60,40,38.9,40z"/><g style="clip-path: circle(30px at 50% 50%);"><rect x="-73" y="-38" width="66" height="80" style="background-color: #586577;"/><image style="overflow:visible;" x="-73" y="-38" width="66" height="80" xlink:href="https://img3.yna.co.kr/photo/yna/YH/2014/08/07/PYH2014080709430001300_P2.jpg"></image></g><text dominant-baseline="central">동물</text></g>',
  children: [
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="http://www.memozee.com/FILES/074/jinsuk.759.20120313%20Red-eyed%20Treefrog%20(Agalychnis%20callidryas)%20-%20%EB%B6%89%EC%9D%80%EB%88%88%EC%B2%AD%EA%B0%9C%EA%B5%AC%EB%A6%AC.jpg"></image></g><g transform="translate(0, 8)"><g class="value01"><rect x="1.1" y="6.1" width="2.6" height="3.6"></rect><rect x="4.7" y="3.6" width="2.6" height="6.1"></rect><rect x="8.3" y="1.4" width="2.6" height="8.2"></rect></g><polygon class="value02" points="10.5,5.6 6,1 1.5,5.6 4,5.6 4,10 8,10 8,5.6" transform="translate(12, 0)"></polygon><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z" transform="translate(24, 0)"></path></g><text>양서류</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">개구리</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">도룡뇽</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">스콜레코모르푸스</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99E9E0345BC1F0FB3E"></image></g><g transform="translate(12, 8)"><g class="value01"><rect x="1.1" y="6.1" width="2.6" height="3.6"></rect><rect x="4.7" y="3.6" width="2.6" height="6.1"></rect><rect x="8.3" y="1.4" width="2.6" height="8.2"></rect></g></g><text>포유류</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">고양이</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">너구리</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://cdn.pixabay.com/photo/2016/06/04/09/19/dragonfly-1435200_960_720.jpg"></image></g><g transform="translate(12, 8)"><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z"></path></g><text>곤충</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">잠자리</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">매미</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://cdn.pixabay.com/photo/2016/06/04/09/19/dragonfly-1435200_960_720.jpg"></image></g><g transform="translate(12, 8)"><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z"></path></g><text>곤충</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">모기</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://cdn.pixabay.com/photo/2016/06/04/09/19/dragonfly-1435200_960_720.jpg"></image></g><g transform="translate(12, 8)"><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z"></path></g><text>곤충</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://cdn.pixabay.com/photo/2016/06/04/09/19/dragonfly-1435200_960_720.jpg"></image></g><g transform="translate(12, 8)"><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z"></path></g><text>곤충</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">나비</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">메뚜기</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://post-phinf.pstatic.net/20160728_246/1469667215892EUqbx_JPEG/KakaoTalk_20160728_095155133.jpg?type=w1200"></image></g><text>조류</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">참새</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">제비</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJ99zTMLYwIezP692YXjyI1VhzRvaBmiK7anCZNoM5aNW4IBB&s"></image></g><g transform="translate(6, 8)"><polygon class="value02" points="10.5,5.6 6,1 1.5,5.6 4,5.6 4,10 8,10 8,5.6"></polygon><path class="value03" d="M2.1,1.4h2.1l3.4,4.4V1.4h2.3v8.2h-2L4.3,5.1v4.5H2.1V1.4z" transform="translate(12, 0)"></path></g><text>파충류</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">악어</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">도마뱀</text></g>',
          children: [],
        },
      ],
    },
    {
      svg: '<g class="relativePerson"><path d="M28,26h-57.4c-15.3,0-27.7-12.4-27.7-27.7v0c0-15.3,12.4-27.7,27.7-27.7h57.4c15.3,0,27.7,12.4,27.7,27.7v0C55.7,13.6,43.3,26,28,26z"/><g style="clip-path: circle(22px at 50% 50%);"><rect x="-56" y="-32" width="52" height="60" style="background-color: #586577;"/><image style="overflow:visible;" x="-56" y="-32" width="52" height="60" xlink:href="https://pbs.twimg.com/profile_images/1022377280654327808/Cox9Th0D_400x400.jpg"></image></g><g transform="translate(12, 8)"><polygon class="value02" points="10.5,5.6 6,1 1.5,5.6 4,5.6 4,10 8,10 8,5.6"></polygon></g><text>어류</text></g>',
      children: [
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">잉어</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">강아지</text></g>',
          children: [],
        },
        {
          svg: '<g class="otherPerson"><path d="M19.5,17h-38c-9.6,0-17.5-7.9-17.5-17.5v0c0-9.6,7.9-17.5,17.5-17.5h38c9.6,0,17.5,7.9,17.5,17.5v0C37,9.1,29.1,17,19.5,17z"/><text dominant-baseline="central">붕어</text></g>',
          children: [],
        },
      ],
    },
  ],
}

function tree_level(t) {
  if (t.children.length == 0) return 1
  return (
    1 +
    Math.max.apply(
      null,
      t.children.map(function (d: any) {
        return tree_level(d)
      })
    )
  )
}

function build_graph(data, max_level, width, height) {
  const graph = {
    nodes: [],
    links: [],
  }

  const n = data.children.length
  const delta_rad = n ? (Math.PI * 2) / n : 0
  const r = max_level ? (Math.min(width, height) * 0.5) / (max_level - 1) : 0
  let rad = (Math.PI * 3) / 2

  function add_node(parent_id: any, level: number, t: any) {
    const node_id = graph.nodes.length
    if (level == 0) {
      graph.nodes.push({
        svg: t.svg,
        fixed: true,
        x: width / 2,
        y: height / 2,
      })
    } else if (level == 1) {
      graph.nodes.push({
        svg: t.svg,
        fixed: true,
        x: width / 2 + Math.cos(rad) * r,
        y: height / 2 + Math.sin(rad) * r,
      })
      rad += delta_rad
    } else {
      graph.nodes.push({
        svg: t.svg,
        x:
          (level * (graph.nodes[parent_id].x - width / 2)) / (level - 1) +
          width / 2,
        y:
          (level * (graph.nodes[parent_id].y - height / 2)) / (level - 1) +
          height / 2,
      })
    }

    if (parent_id >= 0) {
      graph.links.push({
        source: graph.nodes[parent_id],
        target: graph.nodes[node_id],
      })
    }

    t.children.forEach(function (d: any) {
      add_node(node_id, level + 1, d)
    })
  }

  add_node(-1, 0, data)

  return graph
}

const app = document.querySelector('#root')

app?.innerHTML = `
<style>
#root {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
<div class="container">
  <div class="section">
    <div class="chartArea" id="target">
    </div>
  </div>
</div>
`
const { width = 1000, height = 480 } = app?.getBoundingClientRect()

const chartArea = d3.select('.container')

const svg = chartArea
  .selectAll('#target')
  .append('svg')
  .style('width', width)
  .style('height', height)

const max_level = tree_level(data)
const max_distance = Math.min(width, height)
const link_distance = max_level > 1 ? (max_distance * 0.2) / max_level : 0
const graph = build_graph(data, max_level, width, height)
const nodes = graph.nodes
const links = graph.links

console.log('data', nodes, links)

// var force = d3.layout
//   .force()
//   .size([width, height])
//   .nodes(nodes)
//   .links(links)
//   .linkDistance(link_distance)
//   .linkStrength(0.95)
//   .friction(0.95)
//   .charge(-1000)
//   .gravity(0.1)

const force = d3
  .forceSimulation(nodes)
  .force(
    'link',
    d3.forceLink()
    // .id(function (d, i) {
    //   return i
    // })
    // .distance(20)
    // .strength(1)
  )

  .force(
    'charge',
    d3.forceManyBody()
    // .distanceMin(40).distanceMax(100)
  )
  .force('center', d3.forceCenter(width / 2, height / 2))
  .on('tick', () => {
    link
      .attr('x1', (d: any) => d.source.x)
      .attr('y1', (d: any) => d.source.y)
      .attr('x2', (d: any) => d.target.x)
      .attr('y2', (d: any) => d.target.y)
    node.attr('transform', function (d: any) {
      return `translate(${d.x}, ${d.y})`
    })
  })

var link = svg
  .append('g')
  .attr('stroke', '#999')
  .attr('stroke-opacity', 0.6)
  .selectAll('.link')
  .data(links)
  .enter()
  .append('line')
  .attr('class', 'link')

var node = svg
  .append('g')
  .selectAll('.node')
  .data(nodes)
  .enter()
  .append('g')
  .html(function (d: any) {
    return d.svg
  })

node.call(
  d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
)

force.restart()

chartArea.node()

function dragstarted(d: any) {
  force.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

function dragged(event: any, d: any) {
  d.fx = event.x
  d.fy = event.y
}

function dragended(d: any) {
  force.alphaTarget(0)
  d.fx = null
  d.fy = null
}
