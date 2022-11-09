import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  cats:any=[];

  img:any=null;

  constructor(private cat:CategoryService) { }


  upfl(ev:any){
    this.img=ev.target.files[0];
  }

  savep(val:any){
    
    var fd=new FormData();
    fd.append("pname",val.pname);
    fd.append("category",val.category);
    fd.append("pprice",val.pprice);
    fd.append("pimg",this.img);
this.cat.addpro(fd).subscribe((data:any)=>{
  console.log(data);
})

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
