import { Component, OnInit } from '@angular/core';
import { Students } from '../students'
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
  students: Students[] =
    [
      {
        id: 1,
        username: "teonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Tèo",
        email: "teonv@fpt.edu.vn",
        gender: "nam",
        birthday: new Date(1995, 12, 21),
      },
      {
        id: 2,
        username: "pheonv",
        password: "iloveyou",
        fullname: "Nguyễn Văn Chí Phèo",
        email: "pheonv@fpt.edu.vn",
        gender: "nam",
        birthday: new Date(1985, 10, 11),
      },
      {
        id: 3,
        username: "nopt",
        password: "iloveyou",
        fullname: "Phạm Thị Nở",
        email: "nopt@fpt.edu.vn",
        gender: "nu",
        birthday: new Date(1993, 5, 15),
      }
    ]
  constructor() { }

  ngOnInit() {
  }
  Addthongtin() {
    this.students.push(Object.assign(this.formSudent))
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
