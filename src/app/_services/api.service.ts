import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

baseurl:string= environment.baseUrl;
constructor(private http:HttpClient) { }

get(url:string):Observable<T[]>{
 return this.http.get<T[]>(this.baseurl + url);
}
patch(url:string,model:any):Observable<any>{
  return this.http.patch<any>(this.baseurl + url,model).pipe(

  )
}

post(url:string,model:any):Observable<any>{
  return this.http.post(this.baseurl + url,model);
}
put(url:string,model:any):Observable<any>{
  return this.http.put(this.baseurl + url,model);
}

}
