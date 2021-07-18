import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"],
})
export class AuthLoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: "",
    password: "",
  });

  wrongPassword: boolean = false;

  loading: boolean = false;
  isLoggedIn: Observable<boolean>;

  ngOnInit(): void {}

  onSubmit(): void {
    this.loading = true;

    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    this.http
      .post<any>("http://localhost:3000/auth/login", this.loginForm.value)
      .subscribe(
        (response) => {
          if (response.statusCode === 200) {
            this.loading = false;
            this.router.navigateByUrl("/admin");
            console.log(response);
          } else {
            this.loading = false;
            this.wrongPassword = true;
            console.log("it didnt work");
          }
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  }
}
