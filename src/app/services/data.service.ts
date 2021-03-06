import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable()
export class DataService {
  rootURL = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.rootURL}/posts`);
  }
}
