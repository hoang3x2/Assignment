import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  formSudent = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: new Date().toISOString().substring(0, 10),
  }
  students;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.students=this.ds.students;
  }
  Addthongtin() {
    // this.students.push(Object.assign(this.formSudent))
    //this.students.push(this.formSudent);
    // this.ds.formsaukhidangki=this.students;
    // this.ds.formsaukhidangki.push(this.formSudent);
    //console.log(this.ds.formsaukhidangki)
    this.ds.adddangki(this.formSudent);
    this.formSudent = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }

}
