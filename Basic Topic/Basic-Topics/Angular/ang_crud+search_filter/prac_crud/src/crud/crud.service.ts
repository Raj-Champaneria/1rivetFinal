import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url="http://localhost:3000/student";

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get(this.url)
  }
}
