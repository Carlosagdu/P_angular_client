import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

interface Post {
  id: string;
  title: string;
  content: string;
  pictureName: string | null;
  createdAt: string;
  comments: Comment[];
}

interface Comment {
  userName: string;
  email: string;
  comment: string;
  createdAt: string;
}

@Component({
  selector: "viewPost-component",
  templateUrl: "viewPost.component.html",
})
export class ViewPostComponent implements OnInit {
  constructor(private http: HttpClient, private actRoute: ActivatedRoute) {}

  public post: Post;

  ngOnInit(): void {
    const postId = this.actRoute.snapshot.params.id;
    this.fetchPost(postId).subscribe((response) => {
      this.post = {
        id: response.englishPost.id,
        title: response.englishPost.title,
        content: response.englishPost.content,
        createdAt: response.englishPost.createdAt.substring(0, 10),
        pictureName: response.englishPost.pictureName,
        comments: response.comments.map((item) => {
          let comment = item.comment;
          let createdAt = item.createdAt.substring(0, 10);
          let email = item.email;
          let userName = item.userName;
          return { comment, createdAt, email, userName };
        }),
      };
    });
  }

  fetchPost(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/posts/english/${id}`);
  }
}
