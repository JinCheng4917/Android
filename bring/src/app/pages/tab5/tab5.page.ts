import { Component, OnInit } from '@angular/core';
import {ThemeOption} from "ngx-echarts";
import {CoolTheme} from "./CoolTheme";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  initOpts = {
    renderer: 'svg',
    width: 350,
    height: 350
  };

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '40%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };

  constructor() { }

  ngOnInit() {

  }

}
