import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'listproducts',
    component:ListproductsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'addcategory',
    component:AddcategoryComponent
  },{
    path:'listcategories',
    component:ListcategoriesComponent
  },
  {
    path:'add-product',
    component:AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
