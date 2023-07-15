import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private api:ApiService  ) { 
    this.fetchdata()
  }

  fetchdata=()=>{
    this.api.getData().subscribe(
      (response)=>{
        this.datalist=response
      }
    )
  }
datalist:any=[]

// adddata
ename=""
edes=""
edate=""

readdata=()=>{
  let data={
    "ename":this.ename,
    "edes":this.edes,
    "edate":this.edate
  }
  console.log(data)
  this.api.addData(data).subscribe(
    (response)=>{
      console.log(response)
      alert("Data added Succesfully")
    }
  )
}

deletevalue=(id:any)=>{
  const deleteData:any ={"_id":id}
    this.api.removeData(deleteData).subscribe(
      (response:any)=>{
        if (response.status=="Success") {
          alert("Succesfully Deleted")
        } else {
          alert("Error in Deletion")
        }
      }
    )
}
}
