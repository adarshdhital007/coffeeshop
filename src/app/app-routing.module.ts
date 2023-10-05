import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupComponent } from './component/cup/cup.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { GithubPageComponent } from './pages/github-page/github-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'home', component: ListPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'about', component: GithubPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
