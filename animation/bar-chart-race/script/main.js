// Copyright 2022 Takanori Fujiwara.
// Released under the BSD 3-Clause 'New' or 'Revised' License

import {
  barChartRace
} from './chart.js';

const data = await d3.csv('./data/category-ai.csv', d3.autoType);

// console.log(data);
const play = () => {
  const chart = barChartRace(data, {
    svgId: 'bar-chart-race'
  });
  chart.play();
}

//const button = d3.select('body').append('div').append('button')
//  .attr('type', 'button').text('Replay');

// initial play
play();

// replay
//button.on('click', () => {
//  play();
//});