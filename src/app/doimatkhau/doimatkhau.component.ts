import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Students } from '../students';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  formSudent = {
    username: '',
    passwordcu: '',
    passwordMoi: '',
    nhapLaiPasswordMoi: '',
  }

  students;//chứa dl students.json
  formdemo;
  constructor(private ds: DataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.ds.students;
    for (let i = 0; i < this.ds.students.length; i++) {
      if (this.ds.students[i].username == this.ds.username) {
        this.formdemo=this.ds.students[i];
      }
    }
    console.log('day la bang sau khi dang ki'+this.ds.students)
  }
  DoiMatKhau() {
    for (let i = 0; i < this.ds.students.length; i++) {
      if (this.formSudent.username == this.ds.students[i].username &&this.formSudent.passwordcu == this.ds.students[i].password ) {
        if (this.formSudent.passwordMoi !== this.formSudent.nhapLaiPasswordMoi) {
          alert('nhập lại mật khẩu mới k trùng khớp ');
          this.formSudent.nhapLaiPasswordMoi='';
          this.formSudent.passwordMoi='';
          break;
          
        }
        else {
          this.ds.students[i].password = this.formSudent.passwordMoi;
          this.ds.checkdangnhap = false;
          alert('đổi mật khẩu thành công');
          this.router.navigate(['/dangnhap']);
          break;
        }
      }
    }
    if (this.formSudent.username=='' && this.formSudent.passwordcu==''&& this.formSudent.passwordMoi=='' && this.formSudent.nhapLaiPasswordMoi=='' ) {
      alert("Hãy điền đầy đủ thông tin");
    }
  }
}
