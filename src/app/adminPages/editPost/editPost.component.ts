import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

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
        <strong>The post was updated successfully ⭐</strong>
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
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}
}

@Component({
  selector: "editPost-component",
  templateUrl: "editPost.component.html",
})
export class EditPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private _modalService: NgbModal,
    private router: Router
  ) {}

  selectedImage: File = null;

  loading: boolean = false;

  postForm = this.formBuilder.group({
    spanishTitle: "",
    contentSpanish: "",
    englishTitle: "",
    contentEnglish: "",
    pictureName: "",
  });

  postId: string;

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.params.id;
    this.fetchPost(this.postId).subscribe((response) => {
      this.postForm.patchValue({
        spanishTitle: response.spanishPost.title,
        contentSpanish: response.spanishPost.content,
        englishTitle: response.englishPost.title,
        contentEnglish: response.englishPost.content,
        pictureName: response.englishPost.pictureName,
      });
    });
  }

  fetchPost(id: string): Observable<any> {
    return this.http.get<any>(
      `https://pedro-app-rest-api.herokuapp.com/posts/english/${id}`
    );
  }

  onSubmitForm() {
    this.loading = true;

    if (this.selectedImage) {
      // UPLOAD THE PICTURE
      const fd = new FormData();
      fd.append("file", this.selectedImage, this.selectedImage.name);

      this.http
        .post<any>(
          "https://pedro-app-rest-api.herokuapp.com/posts/uploadPicture",
          fd,
          {
            observe: "response",
          }
        )
        .subscribe(
          (response) => {
            console.log("it upload the picture");
            this.loading = false;
          },
          (error) => {
            console.log("it didn't upload the picture");
          }
        );
    }

    // UPLOAD THE UPDATED POST
    this.http
      .patch<any>(
        `https://pedro-app-rest-api.herokuapp.com/posts/${this.postId}`,
        this.postForm.value
      )
      .subscribe(
        (response) => {
          this.loading = false;
          const modalRef = this._modalService.open(NgbdModalConfirmAutofocus);

          modalRef.result
            .then((result) => {
              this.router.navigateByUrl("admin/posts");
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.log("there was an error:", error);
        }
      );
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    this.postForm.patchValue({ pictureName: this.selectedImage.name });
  }
}
