/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: 30 September 2019
; Description: NodeQuiz
;===========================================
*/


import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLogin: string;
  form: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ]
    });
  }

  onSubmit() {
    const employeeId = this.form.controls["employeeId"].value;

    this.http.get("/api/employees/" + employeeId).subscribe(res => {
      if (res) {
        this.cookie.set("isAuthenticated", "true", 7);
        this.router.navigate(["/"]);
      } else {
        this.errorMessage = "Invalid Employee ID";
      }
    });
  }
}