import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  cats:any=[];

  cid:any="";

  products:any=[];
  constructor(private cat:CategoryService) { }

  delpro(id:any,cid:any){

    if(window.confirm('Are you sure?')){
    var fd=new FormData();
    fd.append("id",id);
    fd.append("cid",cid);
    this.cat.delproduct(fd).subscribe((data:any)=>{
      this.products=data;
    })

    }

  }




  listp(ev:any){
  this.cid=ev.target.value;
    var fd=new FormData();
    fd.append("cid",this.cid);

    this.cat.listpro(fd).subscribe((data:any)=>{
      this.products=data;
    })

  }

  getcat(){
   
    this.cat.getallcat().subscribe((data:any)=>{

      this.cats=data;

      console.log(data);
     
    });
  }
  ngOnInit(): void {
    this.getcat();
  }

}
