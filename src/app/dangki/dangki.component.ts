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
    this.ds.getstudents().subscribe(data => {
      this.students = data;
    })
  }
  Addthongtin() {
    this.students.push(Object.assign(this.formSudent))
    this.ds.chuaformsaukhidoimatkhau=this.students;
    console.log(this.ds.chuaformsaukhidoimatkhau)
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
