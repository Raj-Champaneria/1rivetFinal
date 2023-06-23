import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  student: any;

  constructor(private _crud:CrudService) { }

  ngOnInit(): void {
    this.getStudentData()
  }

  getStudentData(){
    this._crud.getStudent().subscribe((res)=>this.student=res)
  }
}
