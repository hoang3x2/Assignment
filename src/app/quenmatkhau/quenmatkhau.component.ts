import { Component, OnInit } from '@angular/core';
import { Students } from '../students'
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  formSudent = {
    username: "",
    fullname: "",
    email: "",
    passwordnew: "",
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
  dem = 0;
  chua = -1;
  EditPass() {
    for (let index = 0; index < this.students.length; index++) {
      if (this.formSudent.username === this.students[index].username &&
        this.formSudent.email === this.students[index].email) {
        this.dem++;
        this.chua = index;
      }
      
    }
    if (this.dem === 1) {
      confirm("Thông tin chính xác,bạn có chắc muốn đổi?")
      this.students[this.chua].password = this.formSudent.passwordnew;
      this.formSudent = {
        username: "",
        fullname: "",
        email: "",
        passwordnew: "",
      }
    }
    else {
      alert("Thông tin không chính xác")
      this.formSudent = {
        username: "",
        fullname: "",
        email: "",
        passwordnew: "",
      }
    }
  }
}
