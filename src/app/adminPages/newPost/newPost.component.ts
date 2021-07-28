import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
        <strong>The post was created successfully ⭐</strong>
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
  selector: "new-post-component",
  templateUrl: "newPost.component.html",
})
export class NewPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _modalService: NgbModal
  ) {}

  selectedImage: File = null;

  postForm = this.formBuilder.group({
    spanishTitle: "",
    contentSpanish: "",
    englishTitle: "",
    contentEnglish: "",
    pictureName: "",
  });

  loading: boolean = false;

  ngOnInit() {}

  onSubmitForm() {
    this.loading = true;

    const fd = new FormData();
    fd.append("file", this.selectedImage, this.selectedImage.name);

    // UPLOAD PICTURE
    this.http
      .post<any>("http://localhost:3000/posts/uploadPicture", fd, {
        observe: "response",
      })
      .subscribe(
        (response) => {
          console.log("it upload the picture");
          this.loading = false;
        },
        (error) => {
          console.log("it didn't upload the picture");
        }
      );

    // UPLOAD THE POST
    this.http
      .post<any>("http://localhost:3000/posts", this.postForm.value, {
        observe: "response",
      })
      .subscribe(
        (response) => {
          console.log("it created the posts");
          this.loading = false;
          const modalRef = this._modalService.open(NgbdModalConfirmAutofocus);

          modalRef.result
            .then((result) => {
              this.router.navigateByUrl("/admin/posts");
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.log("it didn't create the posts");
        }
      );
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    this.postForm.patchValue({ pictureName: this.selectedImage.name });
  }
}
