import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products:any=[]
  cats:any=[];
  pcat:any="";
  constructor(private api:ApiService,private ar:ActivatedRoute) { }

  getcat(){
   
    this.api.getallcat().subscribe((data:any)=>{

      this.cats=data;
     
    });
  }


  getpro(){

    
    this.ar.params.subscribe((urldata:any)=>{
  
      this.pcat=urldata.cid;
  
  var fd=new FormData();
  fd.append("cid",this.pcat);
  this.api.listprocat(fd).subscribe((data:any)=>{

    console.log(data)
    this.products=data;
  })

     })


  }
  ngOnInit(): void {
  this.getcat();
    this.getpro();
  }

}
