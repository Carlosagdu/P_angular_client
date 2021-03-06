import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
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
  selector: "app-page-blog-detail",
  templateUrl: "./page-blog-detail.component.html",
  styleUrls: ["./page-blog-detail.component.css"],
})
export class PageBlogDetailComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public post: Post;

  commentForm = this.formBuilder.group({
    userName: "",
    email: "",
    comment: "",
    postId: "",
  });

  ngOnInit(): void {
    const postId = this.actRoute.snapshot.params.id;
    this.commentForm.patchValue({ postId: postId });
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
    return this.http.get<any>(
      `https://pedro-app-rest-api.herokuapp.com/posts/english/${id}`
    );
  }

  createComment() {}
  onSubmitComment() {
    this.http
      .post<any>(
        "https://pedro-app-rest-api.herokuapp.com/posts/addComment",
        this.commentForm.value
      )
      .subscribe(
        (response) => {
          this.commentForm.reset();
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
