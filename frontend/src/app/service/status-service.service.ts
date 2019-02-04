import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, findIndex } from 'rxjs/operators'
import { Status } from './status'
import { Observable, of } from 'rxjs';

import { from } from 'rxjs';
// const BASE_URL = process.env.NODE_ENV !== 'development'
//     ? ''
//     : '//localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {

  constructor(private http: HttpClient) { }
  getStatus(): Promise<Status[]> {
    return this.http.get('http://127.0.0.1:3000/loadstatus')
      .toPromise().then((res: any) => {
        return res
      })
  }

  addStatus(status): Observable<Status> {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    // console.log('status',status)
    return this.http.post('http://127.0.0.1:3000/addstatus', JSON.stringify(status), {
      headers: headers
    })
    .pipe(map((res: any) => {
      return res.ops[0] as Status
    }))
  }

}
