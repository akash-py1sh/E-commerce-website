import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

import { CategoryService } from './category.service';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TopComponent,
    FooterComponent,
    AddcategoryComponent,
    ListcategoriesComponent,
    AddproductComponent,
    ListproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
