import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private cat:CategoryService,private route:Router) { }

  addcat(fobj:any){

    var fd=new FormData();
    fd.append("cat",fobj.cname);
 
    this.cat.inscategory(fd).subscribe((data:any)=>{
      
      this.route.navigate(["/listcategories"]);

    })

   
  }

  ngOnInit(): void {
  }

}
