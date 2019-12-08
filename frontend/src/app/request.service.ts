import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './Data';

@Injectable()

export class RequestService {

  constructor( private http: HttpClient ) { }

  getData( query: string, state: string ): Observable< HttpResponse< IData > > {
    return this.http.get< IData >( 'http://localhost:3000/get/?query=' + query + '&state=' + state, { observe: 'response' } );
  }
}
