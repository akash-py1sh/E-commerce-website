import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

msg:any="";

login(val:any){
  console.log(val)
  var fd=new FormData();

  fd.append("email",val.lemail)
 
  fd.append("pass",val.lpass)

  this.api.logincust(fd).subscribe((data:any)=>{
    if(data.msg=="Invalid email or password"){
this.msg=data.msg;
    }else{
      localStorage.setItem("cname",data.cname);
      localStorage.setItem("cid",data._id);

      window.location.href="/";
    }
  });
}



  reg(val:any){

    var fd=new FormData();
    fd.append("name",val.rname)
    fd.append("email",val.remail)
    fd.append("phone",val.rphone)
    fd.append("pass",val.rpass)
    fd.append("address",val.address);

    this.api.regcust(fd).subscribe((data:any)=>{
this.msg=data.msg;
    })

  }

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    $('.toggle').click(function(){
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });
  }

}
