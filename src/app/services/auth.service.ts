import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    let verify = sessionStorage.getItem("loginTeste");
    if (!verify) {
      return false;
    }
  }
}
