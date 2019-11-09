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

  username: null
  passwordCu: null
  passwordMoi: null
  nhapLaiPasswordMoi: null
  public students;//chứa dl students.json

  constructor(private ds: DataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ds.getstudents().subscribe(data => {
      this.students = data;
    })

  }
  DoiMatKhau() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].username == this.username && this.students[i].password == this.passwordCu) {
        if (this.passwordMoi !== this.nhapLaiPasswordMoi) {
          alert('nhập lại mật khẩu mới k trùng khớp ')
        }
        else {
          this.students[i].password = this.passwordMoi;
          console.log('day la form sau khi doi mat khau'+this.ds.chuaformsaukhidoimatkhau);
          alert('đổi mật khẩu thành công');
          this.ds.chuaformsaukhidoimatkhau=this.students;
          this.router.navigate(['/dangnhap']);
          break;
        }
      }
    }
    

  }
}
