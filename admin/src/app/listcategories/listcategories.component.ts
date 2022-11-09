import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent implements OnInit {

cats:any=[];

  constructor(private cat:CategoryService) { }

  delcat(id:any){

    if(confirm("Are you sure?")){
   
    var fd=new FormData();
    fd.append("id",id);

    this.cat.delc(fd).subscribe((data:any)=>{
      this.getcat();
    })

  }

  }

  getcat(){
   
    this.cat.getallcat().subscribe((data:any)=>{

      this.cats=data;
     
    });
  }

  ngOnInit(): void {

    this.getcat();
  }

}
