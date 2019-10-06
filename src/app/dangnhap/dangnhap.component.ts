import { Component, OnInit } from '@angular/core';
import { Students } from '../students'
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  formSudent = {
    username: "",
    password: "",
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
  Dangnhap() {
    for (let index = 0; index < this.students.length; index++) {
      if (this.formSudent.username === this.students[index].username && this.formSudent.password === this.students[index].password) {
        this.dem++;
      }
    }
    if (this.dem===1) {
      alert("Đăng nhập thành công")
      this.dem=0;
    }
  }
}
