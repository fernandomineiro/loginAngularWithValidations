import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular";
  answer: Boolean = false;

  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit() {
    this.answer = this.auth.isLoggedIn();
  }

  logout() {
    sessionStorage.setItem("loginTeste", ""), this.router.navigate([""]);
  }
}
