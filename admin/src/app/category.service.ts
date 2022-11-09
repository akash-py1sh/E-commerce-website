import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  inscategory(fd:any){
    
    return this.http.post("http://localhost:2000/cat/add",fd);


  }

  getallcat(){
    return this.http.get("http://localhost:2000/cat/list");
  }
  delc(fd:any){
    return this.http.post("http://localhost:2000/cat/delcat",fd);
  }
  addpro(fd:any){
    return this.http.post("http://localhost:2000/product/add",fd)
  }
  delproduct(fd:any){
    return this.http.post("http://localhost:2000/product/delproduct",fd)
  }
  
  listpro(fd:any){
    return this.http.post("http://localhost:2000/product/list",fd)
  }
  
}
