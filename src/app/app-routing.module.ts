import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { PlaceComponent } from "./components/place/place.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "signin" },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "place", component: PlaceComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }