import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "editPost-component",
  templateUrl: "editPost.component.html",
})
export class EditPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private actRoute: ActivatedRoute
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
    return this.http.get<any>(`http://localhost:3000/posts/english/${id}`);
  }

  onSubmitForm() {
    this.loading = true;

    if (this.selectedImage) {
      // UPLOAD THE PICTURE
      const fd = new FormData();
      fd.append("file", this.selectedImage, this.selectedImage.name);

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
    }

    // UPLOAD THE FILES
    this.http
      .patch<any>(
        `http://localhost:3000/posts/${this.postId}`,
        this.postForm.value
      )
      .subscribe(
        (response) => {
          this.loading = false;
          setTimeout(() => {
            window.location.reload();
          }, 5000);
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
