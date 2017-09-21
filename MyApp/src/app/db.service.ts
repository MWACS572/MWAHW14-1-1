/**
 * Created by Owner on 9/21/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class DbService{
    constructor(private http:Http){}
    getData(){
      return this.http.get('http://jsonplaceholder.typicode.com/users/1');
    }
    getPost(){
      return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');

    }
}
