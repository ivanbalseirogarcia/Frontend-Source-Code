import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Country } from 'src/app/Model/Country';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  country :Country=new Country();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edit();
  }

  Edit(){
    let id=localStorage.getItem("id");
    this.service.getCountryId(+id)
    .subscribe(data=>{
      this.country=data;
    })

  }
  Update(country:Country){
    this.service.updateCountry(country)
    .subscribe(data=>{
      this.country=data;
      alert("Updated succesfully");
      this.router.navigate(["list"]);
    })
  }

}
