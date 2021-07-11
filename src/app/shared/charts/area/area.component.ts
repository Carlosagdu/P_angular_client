import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region',
      },
      subtitle: {
        text: 'Source: Wikipedia.org',
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        // title: {
        //     enabled: false
        // }
      },
      yAxis: {
        title: {
          text: 'Billions',
        },
        // labels: {
        //     formatter: function () {
        //         return this.value / 1000;
        //     }
        // }
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [
        {
          name: 'Asia',
          type: 'line',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
          name: 'Africa',
          type: 'line',
          data: [106, 107, 111, 133, 221, 767, 1766],
        },
        {
          name: 'Europe',
          type: 'line',
          data: [163, 203, 276, 408, 547, 729, 628],
        },
        {
          name: 'America',
          type: 'line',
          data: [18, 31, 54, 156, 339, 818, 1201],
        },
        {
          name: 'Oceania',
          type: 'line',
          data: [2, 2, 2, 6, 13, 30, 46],
        },
      ],
    };
  }
}
