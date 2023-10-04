import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CupComponent } from './cup/cup.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { GithubPageComponent } from './pages/github-page/github-page.component';


@NgModule({
  declarations: [
    AppComponent, 
    CupComponent,
    ListPageComponent,
    CartPageComponent,
    GithubPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
