import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  students;
  formStudent = {
    username: "",
    password: "",
  }
  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService) { }
  dangNhapThanhCong = true;
  nhapSaiThongTin = true;
  ngOnInit() {
    // this.ds.getstudents().subscribe(data=>{
    //       this.students=data;
    //        console.log(this.students);
    //   });
      this.students=this.ds.chuaformsaukhidoimatkhau;
    console.log('day la mang cua tui:' +this.students)
  }
  Dangnhap() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.formStudent.username === this.students[i].username && this.formStudent.password === this.students[i].password) {
        this.dangNhapThanhCong = false;
        this.nhapSaiThongTin = !this.dangNhapThanhCong;
        alert(`Đăng nhập thành công`);
        this.ds.checkdangnhap=true;
        this.router.navigate(['/trangchu']);
        this.ds.username=this.students[i].username;
        // console.log(this.ds.username)
        this.ds.checkdangnhap=true;
        return;
      }
      else {
        this.nhapSaiThongTin = false;
        this.dangNhapThanhCong = !this.nhapSaiThongTin;
      }
    }
  }
}
