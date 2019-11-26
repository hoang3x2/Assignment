import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { CountdownModule } from 'ngx-countdown'
@Component({
  selector: 'app-thitracnghiem',
  templateUrl: './thitracnghiem.component.html',
  styleUrls: ['./thitracnghiem.component.css']
})
export class ThitracnghiemComponent implements OnInit {
  checkdata = this.ds.checkdangnhap;
  dapandung;
  id: string;
  name: string;
  quiz: any;
  url: string;
  data;
  x;
  thongtin = {
    valuee: 0,
  };
  hieninput = false;
  hiennextpage = true;
  hiensubmit = true;
  mark = 0;
constructor(private ds: DataService,
  private route: ActivatedRoute, private router: Router,private cout: CountdownModule,
) { }

ngOnInit() {
  if (this.ds.checkdangnhap == false) {
    this.router.navigate(['/dangnhap'])
  }
  else {
    this.route.paramMap.subscribe(
      para => {
        this.id = para.get('Id');
        this.name = para.get('Name');
      });
    this.url = 'assets/db/Quizs/' + this.id + '.json';
    this.ds.getQuiz(this.url).subscribe((data) => {
      this.quiz = data;
      // console.log(this.quiz)
    });
    
  }

}
sodong = 1;
sotrang = 1;
thoigian=3600;
nextpage() {
  this.hieninput = false;
  this.hiensubmit = true;
  this.hiennextpage = true;
  this.dapandung = null;
  if (this.quiz.length / this.sodong > this.sotrang) {
    this.sotrang++;
  }
  if (this.sotrang == this.quiz.length) {
    alert('bai thi cua ban dat duoc:' + this.mark);
    this.router.navigate(['/danhmuc']);
  }
}
luipage() {
  if (this.sotrang > 1) {
    this.sotrang--;
  }
}
tinhdiem(dapanId, mangDapAn) {
  this.hieninput = true;

  if (this.thongtin.valuee == dapanId) {
    this.mark++;
  }
  else {
    this.dapandung = mangDapAn.find(x => {
      return x.Id == dapanId;
    });
  }
}
kiemtrainput() {
  if (this.hieninput === false) {
    this.hiensubmit = false;

  }
}
kiemtrasubmit() {
  if (this.hiensubmit === false) {
    this.hiennextpage = false;
    this.hiensubmit = true;
  }
}
finishTest(thoigian){
  if (thoigian<=0) {
    alert('bai thi cua ban dat duoc:' + this.mark);
    this.router.navigate(['/trangchu']);
  }
    
}
}
