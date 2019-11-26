import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseServiceService } from '../firebase-service.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  formStudent = {
    username: "",
    password: "",
  }
  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService,private db:AngularFireDatabase, private fb: FirebaseServiceService) { }
  dangNhapThanhCong = true;
  nhapSaiThongTin = true;
  ngOnInit() {
  }
  Dangnhap() {
    console.log(this.fb.students)
    for (let i = 0; i < this.fb.students.length; i++) {
      if (this.formStudent.username === this.fb.students[i].username && this.formStudent.password === this.fb.students[i].password) {
        this.dangNhapThanhCong = false;
        this.nhapSaiThongTin = !this.dangNhapThanhCong;
        alert(`Đăng nhập thành công,Chúc Bạn May Mắn :)`);
        this.ds.checkdangnhap = true;
        this.router.navigate(['/danhmuc']);
        this.ds.username = this.fb.students[i].username;
        this.ds.fullname = this.fb.students[i].fullname;
        this.ds.checkdangnhap = true;
        return;
      }
      else {
        this.nhapSaiThongTin = false;
        this.dangNhapThanhCong = !this.nhapSaiThongTin;
      }
    }
  }
}
