import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { DataService } from "./data.service";
import { Post } from "../models/post";

describe("DataService", () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
  );

  beforeEach(() => {
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("should retrieve posts from API via GET", () => {
    const dummyPosts: Post[] = [
      {
        userId: 1,
        id: 1,
        title: "Angular Testing",
        body: "Karma with Jasmine is magic"
      },
      {
        userId: 1,
        id: 2,
        title: "NGRX",
        body: "NGRX makes state management easy"
      }
    ];
    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.rootURL}/posts`);

    expect(request.request.method).toBe("GET");

    request.flush(dummyPosts);
  });
});
