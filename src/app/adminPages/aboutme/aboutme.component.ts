import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "aboutme-cmp",
  templateUrl: "aboutme.component.html",
})
export class AboutMeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    // this.fetchUserInformation();
    // this.fetchPostsNumber();
  }

  public profileImage: File = null;

  public postsNumber: number;

  userForm = this.formBuilder.group({
    profilePictureName: null,
    userName: "",
    email: "",
    name: "",
    aboutMe: "",
  });

  onSubmitForm() {
    if (this.profileImage) {
      this.submitProfilePicture();
    } else {
      console.log("not picture loaded");
    }
    this.updateUserInformation();
  }

  onFileSelected(event) {
    this.profileImage = event.target.files[0];
    this.userForm.patchValue({ profilePictureName: this.profileImage.name });
  }

  fetchUserInformation() {
    this.http
      .get<any>(
        "http://localhost:3000/user/3f647a2d-b5d5-4d78-ab15-28d2b3e8a76c"
      )
      .subscribe(
        (response) => {
          this.userForm.patchValue({
            profilePictureName: response.profilePictureName,
            userName: response.userName,
            email: response.email,
            name: response.name,
            aboutMe: response.aboutMe,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateUserInformation() {
    this.http
      .patch<any>(
        "http://localhost:3000/user/3f647a2d-b5d5-4d78-ab15-28d2b3e8a76c",
        this.userForm.value
      )
      .subscribe(
        (response) => {
          console.log("user information updated");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  submitProfilePicture() {
    const fd = new FormData();
    fd.append("file", this.profileImage, this.profileImage.name);
    this.http
      .post<any>("http:///localhost:3000/posts/uploadPicture", fd)
      .subscribe(
        (response) => {
          console.log("it upload the picture");
        },
        (error) => {
          console.log("it didn't upload the picture");
        }
      );
  }

  fetchPostsNumber() {
    this.http
      .get<any>("http://localhost:3000/posts/english")
      .subscribe((response) => {
        this.postsNumber = response.length;
      });
  }
}
