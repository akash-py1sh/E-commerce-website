import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ListcartComponent } from './listcart/listcart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent,
    ListcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
