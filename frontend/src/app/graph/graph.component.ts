import { Component, OnInit, Input } from '@angular/core';
import { GraphService } from './graph.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: [ './graph.component.css' ]
})
export class GraphComponent implements OnInit {

  private graphData: {
    x: {},
    y: {}
  };

  constructor( public graphService: GraphService ) {  }

  ngOnInit() { }

  updateGraph() {
    this.graphData = this.graphService.getGraphData();
    console.log( this.graphData );
  }
}
