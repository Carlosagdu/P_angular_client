import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

interface Post {
  id: string;
  title: string;
  content: string;
  pictureName: string | null;
  createdAt: string;
}

@Component({
  selector: "app-page-blog-list-sidebar",
  templateUrl: "./page-blog-list-sidebar.component.html",
  styleUrls: ["./page-blog-list-sidebar.component.css"],
})
export class PageBlogListSidebarComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public posts: Post[];

  ngOnInit(): void {
    this.fetchPosts().subscribe((response) => {
      this.posts = response.map((item) => {
        let createdAt = item.createdAt.substring(0, 10);
        let id = item.id;
        let title = item.title;
        let content = item.content.substring(0, 150) + "...";
        let pictureUrl = item.pictureName;
        return { createdAt, id, title, content, pictureUrl };
      });
    });
  }

  fetchPosts(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/posts/english");
  }
}
