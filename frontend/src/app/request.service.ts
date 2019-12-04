import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './Data';

@Injectable()

export class RequestService {

  constructor( private http: HttpClient ) { }

  getData( xVar: string, yVar: string ): Observable< HttpResponse< IData > > {

    return this.http.get< IData >( 'http://localhost:3000/get/?x_var=' + xVar + '&y_var=' + yVar, { observe: 'response' } );
  }
}
