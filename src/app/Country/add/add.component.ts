import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Country } from 'src/app/Model/Country';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  country:Country=new Country();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Save(){
    this.service.createCountry(this.country)
    .subscribe(data=>{
      alert("Country added succesfully");
      this.router.navigate(["list"]);
    })
  }

}
