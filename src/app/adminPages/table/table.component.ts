import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

interface Post {
  id: string;
  title: string;
  content: string;
  pictureUrl: string | null;
  createdAt: string;
}

@Component({
  selector: "table-cmp",
  templateUrl: "table.component.html",
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public tableData1: TableData;
  public tableData2: TableData;

  public posts: Post[];

  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.fetchPosts().subscribe((response) => {
      this.loading = false;
      this.posts = response.map((item) => {
        let createdAt = item.createdAt.substring(0, 10);
        let id = item.id;
        let title = item.title;
        let content = item.content.substring(0, 150) + "...";
        let pictureUrl = item.pictureUrl;
        return { createdAt, id, title, content, pictureUrl };
      });
    });
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<any>("http://localhost:3000/posts/english");
  }
}
