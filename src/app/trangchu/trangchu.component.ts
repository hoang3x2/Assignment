import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
    selector: 'app-trangchu',
    templateUrl: './trangchu.component.html',
    styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
    subject: any;
    sodong = 4;
    sotrang = 1;
    nextpage() {
        if (this.sodong > this.sotrang) {
            this.sotrang++;
        }
    }
    luipage() {
        if (this.sotrang > 1) {
            this.sotrang--;
        }
    }

    constructor(private service: DataService) { }

    ngOnInit() {
        this.service.getSubjects().subscribe(data => {
            this.subject = data;
        })
    }

}
