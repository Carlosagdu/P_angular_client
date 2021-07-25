import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngbd-modal-confirm-autofocus",
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Profile deletion</h4>
      <button
        type="button"
        class="close"
        aria-label="Close button"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        <strong
          >Are you sure you want to delete the post with the title
          <span class="text-primary">"{{ title }}"</span></strong
        >
      </p>
      <p>
        <span class="text-danger">This operation can not be undone.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="modal.dismiss('cancel click')"
      >
        Cancel
      </button>
      <button
        type="button"
        ngbAutofocus
        class="btn btn-danger"
        (click)="modal.close('Ok click')"
      >
        Delete
      </button>
    </div>
  `,
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}

  @Input() id: string;
  @Input() title: string;
}

@Component({
  selector: "table-cmp",
  templateUrl: "table.component.html",
})
export class TableComponent implements OnInit {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  constructor(private http: HttpClient, private _modalService: NgbModal) {}
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

  displayMessage(id: string) {
    console.log(id);
  }

  open(id: string, title: string) {
    const modalRef = this._modalService.open(NgbdModalConfirmAutofocus);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.title = title;

    modalRef.result
      .then((result) => {
        this.deletePostById(id);
      })
      .catch((error) => {
        console.log("it was click the cancel button");
      });
  }

  deletePostById(id: string) {
    this.http
      .delete<any>(`http://localhost:3000/posts/${id}`)
      .subscribe((response) => {
        window.location.reload();
      });
  }
}

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
