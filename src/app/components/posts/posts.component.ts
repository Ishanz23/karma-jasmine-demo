import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private dataService: DataService) {
    this.posts$ = dataService.getPosts();
  }

  ngOnInit() {}
}
