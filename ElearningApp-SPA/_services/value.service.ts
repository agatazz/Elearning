import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from 'src/app/_models/value';

const httpOptions={
  headers:new HttpHeaders({
    'Authorziation':'Bearer   ' + localStorage.getItem('token')
  })

}

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  baseUrl= environment.apiUrl;

constructor(private http:HttpClient) { }
getValues():Observable<Value[]>{
  return this.http.get<Value[]>(this.baseUrl+'values',httpOptions);
  
}

getValue(id):Observable<Value>{
  return this.http.get<Value>(this.baseUrl+'values'+ id,httpOptions);
}

}
