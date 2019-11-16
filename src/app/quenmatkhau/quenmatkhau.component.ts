import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { DataService } from '../data.service';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  formSudent = {
    username: "",
    email: "",
    passwordnew: "",
  }
  students;
  constructor(private ds: DataService) {
    
   }

  ngOnInit() {
    this.students=this.ds.students;
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
      this.ds.students[this.chua].password = this.formSudent.passwordnew;
      this.formSudent = {
        username: "",
        email: "",
        passwordnew: "",
      }
    }
    else {
      alert("Thông tin không chính xác")
      this.formSudent = {
        username: "",
        email: "",
        passwordnew: "",
      }
    }
  }
}
