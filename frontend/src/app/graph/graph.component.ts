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
  };

  constructor( public requestService: RequestService ) {  }

  ngOnInit() {  }

  updateGraph( query: string, state: string ) {

    this.requestService.getData( query, state ).subscribe( res => {
      console.log(res);
      const xCounts = {};
      res.body.x.forEach( element => {
        xCounts[ element ] = 1 + ( xCounts[ element ] || 0);
      });

      this.graphData = { x : xCounts };

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

      this.graph.data.labels = Object.keys(this.graphData.x);
      this.graph.data.datasets[0].label = query;
      this.graph.data.datasets[0].data = Object.values(this.graphData.x);
      this.graph.update();
    });
  }
}
