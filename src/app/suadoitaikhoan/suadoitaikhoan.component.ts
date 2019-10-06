import { Component, OnInit } from '@angular/core';
import { Students } from '../students'
@Component({
  selector: 'app-suadoitaikhoan',
  templateUrl: './suadoitaikhoan.component.html',
  styleUrls: ['./suadoitaikhoan.component.css']
})
export class SuadoitaikhoanComponent implements OnInit {
  formSudent = {
    id: 0,
    username: "",
    fullname: "",
    email: "",
    password: "",
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
  selectStudentId = -1;
  ShowEditStudent(student: Students) {
    this.formSudent = {
      id: student.id,
      username: student.username,
      fullname: student.fullname,
      email: student.email,
      password: student.password,
      gender: student.gender,
      birthday: new Date().toISOString().substring(0, 10),
    }
    this.selectStudentId = this.formSudent.id
  }
  SaveStudentEdit(id: number) {
    let index = this.students.indexOf(this.students.find(sv => sv.id === id));
    this.students[index] = Object.assign(this.formSudent);
    this.selectStudentId = -1;
    this.formSudent = {
      id: 0,
      username: "",
      fullname: "",
      email: "",
      password: "",
      gender: "",
      birthday: new Date().toISOString().substring(0, 10),
    }
  }
}
