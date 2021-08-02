import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: "user-cmp",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.fetchUserInformation();
    this.fetchPostsNumber();
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

  passwordForm = this.formBuilder.group(
    {
      currentPassword: "",
      newPassword: ["", [Validators.required]],
      confirmNewPassword: ["", [Validators.required]],
      email: "pedro@perezcollado.com",
    },
    {
      validator: ConfirmedValidator("newPassword", "confirmNewPassword"),
    }
  );

  get f() {
    return this.passwordForm.controls;
  }

  onSubmitPasswordForm() {
    this.http
      .post<any>(
        "https://pedro-app-rest-api.herokuapp.com/auth/changePW",
        this.passwordForm.value
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.passwordForm.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  }

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
        "https://pedro-app-rest-api.herokuapp.com/user/472a8678-9657-4706-bdc6-111b4750f653"
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
        "https://pedro-app-rest-api.herokuapp.com/user/472a8678-9657-4706-bdc6-111b4750f653",
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
      .post<any>(
        "https://pedro-app-rest-api.herokuapp.com/posts/uploadPicture",
        fd
      )
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
      .get<any>("https://pedro-app-rest-api.herokuapp.com/posts/english")
      .subscribe((response) => {
        this.postsNumber = response.length;
      });
  }
}
