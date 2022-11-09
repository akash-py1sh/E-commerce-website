import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-listcart',
  templateUrl: './listcart.component.html',
  styleUrls: ['./listcart.component.css']
})
export class ListcartComponent implements OnInit {
  cname:any="";
gt:any=0;
  cid:any="";
  products:any=[];
  constructor(private api:ApiService) { }

  rmvc(val:any){
    if(confirm('Are you Sure?')){
    var fd=new FormData();
    fd.append("did",val);
    this.api.rmvcart(fd).subscribe((data:any)=>{
      this.getpro();
    });
   
  }

  }

  corder(){
    var cid=localStorage.getItem("cid");
    this.cid=cid;
    var fd=new FormData();
    fd.append("cid",this.cid);


    this.api.co(fd).subscribe((data:any)=>{

      console.log(data)
    });

  }

  logout(){
    localStorage.removeItem("cname");
      localStorage.removeItem("cid");

      window.location.href="/login";
  }

  
  getpro(){
     this.gt=0;
    var cid=localStorage.getItem("cid");
    this.cid=cid;
    var fd=new FormData();
    fd.append("cid",this.cid);


    this.api.listcart(fd).subscribe((data:any)=>{

      console.log(data)
      this.products=data;
      this.products.forEach((pp:any)=> {
        this.gt=this.gt+pp.total;
      });
    })
  }
  ngOnInit(): void {
    var cn=localStorage.getItem("cname");
    if(cn!=null){
      this.cname=cn;
    }
    this.getpro();
  }

}
