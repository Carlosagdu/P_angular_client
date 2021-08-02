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
  className: boolean;
}

@Component({
  selector: "app-page-blog-list-sidebar",
  templateUrl: "./page-blog-list-sidebar.component.html",
  styleUrls: ["./page-blog-list-sidebar.component.css"],
})
export class PageBlogListSidebarComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public posts: Post[];
  className: boolean = false;
  loading: boolean = true;

  ngOnInit(): void {
    this.fetchPosts().subscribe((response) => {
      this.loading = false;
      this.posts = response.map((item) => {
        this.className = !this.className;
        let createdAt = item.createdAt.substring(0, 10);
        let id = item.id;
        let title = item.title;
        let content = item.content.substring(0, 300) + "...";
        let pictureUrl = item.pictureName;
        let commentsNumber = item.postLanguage.comments.length;
        let className = this.className;
        return {
          createdAt,
          id,
          title,
          content,
          pictureUrl,
          commentsNumber,
          className,
        };
      });
    });
  }

  fetchPosts(): Observable<any> {
    return this.http.get<any>(
      "https://pedro-app-rest-api.herokuapp.com/posts/english"
    );
  }
}
