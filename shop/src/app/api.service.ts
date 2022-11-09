import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getallcat(){
    return this.http.get("http://localhost:2000/cat/list");
  }
  listpro(){
    return this.http.get("http://localhost:2000/product/listall");
  }

  listprocat(fd:any){
    return this.http.post("http://localhost:2000/product/listallcat",fd);
  }

  regcust(fd:any){
    return this.http.post("http://localhost:2000/auth/signup",fd);
  }
  logincust(fd:any){
    return this.http.post("http://localhost:2000/auth/login",fd);
  }
  addcart(fd:any){
    return this.http.post("http://localhost:2000/cart/add",fd);
  }
  listcart(fd:any){
    return this.http.post("http://localhost:2000/cart/list",fd);
  }
  rmvcart(fd:any){
    return this.http.post("http://localhost:2000/cart/delc",fd);
  }
  co(fd:any){
    return this.http.post("http://localhost:2000/cart/confirmorder",fd);
  }
}
