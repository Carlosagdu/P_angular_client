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

  spanishImageFile: File = null;
  englishImageFile: File = null;

  spanishForm = this.formBuilder.group({
    title: "",
    content: "",
    pictureUrl: "",
  });

  englishForm = this.formBuilder.group({
    title: "",
    content: "",
    pictureUrl: "",
  });

  ngOnInit() {}

  onSubmitSpanish(): void {
    const fd = new FormData();
    fd.append("image", this.spanishImageFile, this.spanishImageFile.name);
    fd.append("postData", this.spanishForm.value);
    console.log(fd.get("postData"), fd.get("image"));
    // console.log(fd.get("image"));
    // console.log(this.spanishForm.value);
  }

  onSubmitEnglish(): void {
    console.log(this.englishForm.value, this.englishImageFile);
  }

  onFileSelectedEnglish(event) {
    this.englishImageFile = event.target.files[0];
  }

  onFileSelectedSpanish(event) {
    this.spanishImageFile = event.target.files[0];
  }
}
