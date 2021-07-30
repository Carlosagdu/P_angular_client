import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

@Component({
  selector: "ngbd-modal-confirm-autofocus",
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Comment deletion</h4>
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
          >Are you sure you want to delete the comment from
          <span class="text-primary">"{{ userName }}"</span></strong
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

  @Input() userName: string;
}

@Component({
  selector: "ngbd-modal-confirm-autofocus",
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Success ⭐</h4>
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
        <strong>The comment was deleted successfully ⭐</strong>
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        ngbAutofocus
        class="btn btn-outline-primary"
        (click)="modal.close('Ok click')"
      >
        Go back
      </button>
    </div>
  `,
})
export class ConfirmCommentDeleted {
  constructor(public modal: NgbActiveModal) {}
}

interface Post {
  id: string;
  title: string;
  content: string;
  pictureName: string | null;
  createdAt: string;
  comments: Comment[];
}

interface Comment {
  id: number;
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
  constructor(
    private _modalService: NgbModal,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  public post: Post;

  postId: string;

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.params.id;
    this.fetchPost(this.postId).subscribe((response) => {
      this.post = {
        id: response.englishPost.id,
        title: response.englishPost.title,
        content: response.englishPost.content,
        createdAt: response.englishPost.createdAt.substring(0, 10),
        pictureName: response.englishPost.pictureName,
        comments: response.comments.map((item) => {
          let id = item.id;
          let comment = item.comment;
          let createdAt = item.createdAt.substring(0, 10);
          let email = item.email;
          let userName = item.userName;
          return { id, comment, createdAt, email, userName };
        }),
      };
    });
  }

  fetchPost(id: string): Observable<any> {
    return this.http.get<any>(
      `https://pedro-app-rest-api.herokuapp.com/posts/english/${id}`
    );
  }

  deleteComment(id: number, userName: string) {
    const modalRef = this._modalService.open(NgbdModalConfirmAutofocus);
    modalRef.componentInstance.userName = userName;

    modalRef.result
      .then((response) => {
        this.http
          .delete(
            `https://pedro-app-rest-api.herokuapp.com/posts/comment/${id}`
          )
          .subscribe(
            (res) => {
              console.log(res);
              this._modalService.open(ConfirmCommentDeleted).result.then(() => {
                window.location.reload();
              });
            },
            (error) => {
              console.log(error);
            }
          );
      })
      .catch((error) => {
        console.log("cancel button was clicked");
      });
  }
}
