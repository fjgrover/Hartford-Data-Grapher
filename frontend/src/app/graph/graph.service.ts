import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private graphData;

  constructor( private requestService: RequestService ) { }

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

      // dump graphData for demo
      console.log( this.graphData );
    });
  }

  getGraphData() {
    return this.graphData;
  }
}
