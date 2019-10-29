import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Country } from 'src/app/Model/Country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countries: Country[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }
  Edit(country:Country):void{
    localStorage.setItem("id",country.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(country:Country){
    this.service.deleteCountry(country)
    .subscribe(data=>{
      this.countries=this.countries.filter(c=>c!==country);
      alert("Country deleted successfully");
    })
  }

}
