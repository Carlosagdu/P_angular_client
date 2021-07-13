import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "new-post-component",
  templateUrl: "newPost.component.html",
})
export class NewPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
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

    this.http
      .post<any>("http://localhost:3000/posts", this.postForm.value, {
        observe: "response",
      })
      .subscribe(
        (response) => {
          console.log("it created the posts");
          this.loading = false;
          this.router.navigateByUrl("/admin/posts");
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
