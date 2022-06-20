import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  data: User;
  value: any = [];

  constructor(public apiService: ApiService, public router: Router) {
    this.data = new User();
  }

  ngOnInit(): void {}

  submitForm() {
    this.apiService.getUser().subscribe((response) => {
      let size = Object.keys(response).length;
      for (let i = 0; i < size; i++) {
        response[i].login == this.data.login &&
        response[i].password == this.data.password
          ? (sessionStorage.setItem("loginTeste", this.data.login),
            this.router.navigate(["place"]))
          : null;
      }
      // Object.keys(response).forEach((item) => {
      //   console.log(item + " - " + response[item]);
      // });
      // this.router.navigate(["place"]);
    });
  }
}
