import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service'
@Component({
  selector: 'app-thitracnghiem',
  templateUrl: './thitracnghiem.component.html',
  styleUrls: ['./thitracnghiem.component.css']
})
export class ThitracnghiemComponent implements OnInit {

  id:string;
  name: string;
  quiz: any;
  url: string;
  data;
  stt=1;
  thongtin = {
    valuee: 0,
  };
  constructor(private _data: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      para => {
      this.id = para.get('Id');
        this.name = para.get('Name');
      });
      this.url = 'assets/db/Quizs/' + this.id + '.json';
    this._data.getQuiz(this.url).subscribe((data) => {
      this.quiz = data;
      console.log(this.quiz)
    });
  }
  sodong = 1;
  sotrang = 1;
  nextpage() {
    if (this.quiz.length / this.sodong > this.sotrang) {
      this.sotrang++;
    }
  }
  luipage() {
    if (this.sotrang > 1) {
      this.sotrang--;
    }
  }
  

}
