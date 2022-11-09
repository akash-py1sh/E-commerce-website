import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ListcartComponent } from './listcart/listcart.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'category/:cid',
    component:CategoryComponent
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'cart',
    component:ListcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
