import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(private api:ApiService, route:Router  ) { 
    this.fetchdata();
  }

  ngOnInit(): void {
    
  }



  // public fetchdata=()=>{
  //   this.api.getData().subscribe(
  //     (response)=>{
  //       this.listofdatas = (response);
        
  //     }
  //   )
  // }

  public fetchdata = () => {
    this.api.getData().subscribe(
      (response) => {
        if (Array.isArray(response)) {
          this.listofdatas = response;
        } else {
          console.error('API response is not an array:', response);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  

  listofdatas:any[]=[];

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

deleteValue = (id: any) => {
  const deleteData: any = { "_id": id };
  this.api.removeData(deleteData).subscribe(
    (response: any) => {
      if (response.status === "Success") {
        alert("Successfully Deleted");
      } else {
        alert("Error in Deletion");
        console.log(response.error); // Log the specific error response
      }
    },
    (error: any) => {
      alert("Error in Deletion");
      console.log(error); // Log any error that occurs during the API call
    }
  );
}
}
