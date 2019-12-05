import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: [ './graph.component.css' ]
})
export class GraphComponent implements OnInit {

  private graph: Chart;
  private graphData: {
    x: {},
    y: {}
  };

  constructor( public requestService: RequestService ) {  }

  ngOnInit() {  }

  updateGraph( xVar: string, yVar: string ) {

    this.requestService.getData( xVar, yVar ).subscribe( res => {
      const xCounts = {};
      res.body.x.forEach( element => {
        xCounts[ element ] = 1 + ( xCounts[ element ] || 0);
      });

      const yCounts = {};
      res.body.y.forEach( element => {
        yCounts[ element ] = 1 + ( yCounts[ element ] || 0);
      });

      this.graphData = { x : xCounts, y : yCounts };

      if ( this.graph === undefined ) {
        this.graph = new Chart('canvas', {
          type: 'bar',
          data: {
            datasets: [
              {
                backgroundColor: '#800000',
                borderColor: 'black'
              }
            ]
          }
        });
      }

      console.log(Object.values(this.graphData.x));
      console.log(Array.isArray(Object.values(this.graphData.x)));

      this.graph.data.labels = Object.keys(this.graphData.x);
      this.graph.data.datasets[0].label = xVar;
      this.graph.data.datasets[0].data = Object.values(this.graphData.x);
      this.graph.update();
    });
  }
}
