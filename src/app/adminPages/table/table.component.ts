import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Type } from "@angular/core";
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
          >Are you sure you want to delete
          <span class="text-primary">"John Doe"</span> profile?</strong
        >
      </p>
      <p>
        All information associated to this user profile will be permanently
        deleted.
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
        Ok
      </button>
    </div>
  `,
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: { [name: string]: Type<any> } = {
  autofocus: NgbdModalConfirmAutofocus,
};

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

  open(name: string, id: string) {
    this._modalService.open(MODALS[name]);
    console.log(id);
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
