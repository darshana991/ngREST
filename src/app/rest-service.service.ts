import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor( private httpClient : HttpClient  ) { }
    
  getAllcomments():Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

  getparmsPosts():Observable<any>{
    let param1 = new HttpParams().set('userid','1');
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=1',{params : param1})
  }

  postComments( obj : any):Observable<any>{
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts' , obj   )
  } 

  getMails():Observable<any>{
    
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  }

}
