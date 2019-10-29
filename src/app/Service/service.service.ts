import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Model/Country';

@Injectable()
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/countries';

  getCountries(){
    return this.http.get<Country[]>(this.Url);
  }
  createCountry(country:Country){
    return this.http.post<Country>(this.Url,country);
  }
  getCountryId(id:number){
    return this.http.get<Country>(this.Url+"/"+id);
  }
  updateCountry(country:Country){
    return this.http.put<Country>(this.Url+"/"+country.id,country);
  }
  deleteCountry(country:Country){
    return this.http.delete<Country>(this.Url+"/"+country.id);
  }
}
