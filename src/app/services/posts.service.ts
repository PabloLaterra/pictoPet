import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  constructor(private http: HttpClient, ) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/xml',
      'app-id': environment.appid
    })
  };


allPosts() {
  return this.http.get(environment.apiUrl + 'post', this.httpOptions);  
  };





}
