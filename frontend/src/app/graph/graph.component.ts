import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: [ './graph.component.css' ],
  providers: [ GraphService ]
})
export class GraphComponent implements OnInit {

  private graphData;

  constructor( private graphService: GraphService ) {  }

  ngOnInit() {
    //this.graphService.graphData.subscribe(graphData => this.graphData = graphData);
  }
}
