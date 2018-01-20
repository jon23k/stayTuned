import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "./signin/signin.component";
import { PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'Post/:post',  component: PostComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
