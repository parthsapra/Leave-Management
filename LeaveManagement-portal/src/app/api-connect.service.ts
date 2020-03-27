import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  endPoint = 'https://localhost:44307/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;'
    })
  };
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getLeave(): Observable<any> {
    return this.http.get(this.endPoint + 'leave').pipe(map(this.extractData));
  }
  getLeaveById(id): Observable<any> {
    return this.http.get(this.endPoint + 'leave/' + id).pipe(map(this.extractData));
  }
  addLeave(leave): Observable<any> {
    console.log(leave);
    return this.http.post<any>(this.endPoint + 'leave', JSON.stringify(leave), this.httpOptions).pipe(tap((leave) => console.log(`added leave w/ id=${leave.id}`)), catchError(this.handleError<any>('addLeave')));
  }
  addEmployee(employee): Observable<any> {
    console.log(employee);
    return this.http.post<any>(this.endPoint + 'employee', JSON.stringify(employee), this.httpOptions).pipe(tap((employee) => console.log(`added employee w/ id=${employee.id}`)), catchError(this.handleError<any>('addEmployee')));
  }
  getEmployee(): Observable<any> {
    return this.http.get(this.endPoint + 'employee').pipe(map(this.extractData));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
