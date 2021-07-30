import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

interface Post {
  id: string;
  title: string;
  content: string;
  pictureName: string | null;
  createdAt: string;
  commentsNumber: number;
}

@Component({
  selector: "app-index-landing-two",
  templateUrl: "./index-landing-two.component.html",
  styleUrls: ["./index-landing-two.component.css"],
})
export class IndexLandingTwoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public posts: Post[];

  ngOnInit(): void {
    this.fetchLatestPost().subscribe(
      (response) => {
        this.posts = response.map((item) => {
          let createdAt = item.createdAt.substring(0, 10);
          let id = item.id;
          let title = item.title;
          let content = item.content.substring(0, 200) + "...";
          let pictureUrl = item.pictureName;
          let commentsNumber = item.postLanguage.comments.length;
          return {
            createdAt,
            id,
            title,
            content,
            pictureUrl,
            commentsNumber,
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchLatestPost(): Observable<any> {
    return this.http.get<any>(
      "https://pedro-app-rest-api.herokuapp.com/posts/latest"
    );
  }
}
