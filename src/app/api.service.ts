import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // get data
  getData=()=>{
    return this.http.get("http://localhost:3000/getdata")
  }
  // postdata
  addData=(data:any)=>{
    return this.http.post("http://localhost:3000/adddata",data)
  }
  // deletedata
  removeData=(data:any)=>{
    return this.http.post("http://localhost:3000/deletedata",data)
   }
 


}
