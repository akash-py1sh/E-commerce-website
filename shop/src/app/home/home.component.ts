import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[]
  cats:any=[];
  qty:any=1;
  cname:any="";

  cid:any="";
 
  constructor(private api:ApiService) { }

  act(val:any){

    this.cid=localStorage.getItem("cid");
    var fd=new FormData();
    fd.append("pid",val.pid)
    fd.append("cid",this.cid)
    fd.append("price",val.price)
    fd.append("qty",val.qty)
   

    this.api.addcart(fd).subscribe((data:any)=>{

    })

  }






  getcat(){


    this.api.getallcat().subscribe((data:any)=>{

      this.cats=data;
     
    });
  }

  logout(){
    localStorage.removeItem("cname");
      localStorage.removeItem("cid");

      window.location.href="/login";
  }

  getpro(){



    this.api.listpro().subscribe((data:any)=>{

      console.log(data)
      this.products=data;
    })
  }
  ngOnInit(): void {

    var cn=localStorage.getItem("cname");
    if(cn!=null){
      this.cname=cn;
    }
  this.getcat();
    this.getpro();
  }

}
