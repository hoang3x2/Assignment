import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  danhmuc = [
    {
        "Id" :1,
        "IdName": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "../../assets/images/ADAV.jpg"
    },
    {
        "Id" :2,
        "IdName": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "../../assets/images/ADBS.jpg"
    },
    {
        "Id" :3,
        "IdName": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "../../assets/images/ADTE.jpg"
    },
    {
        "Id" :4,
        "IdName": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "../../assets/images/ADUI.jpg"
    },
    {
        "Id" :5,
        "IdName": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "../../assets/images/ASNE.png"
    },
    {
        "Id" :6,
        "IdName": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "../../assets/images/CLCO.jpg"
    },
    {
        "Id" :7,
        "IdName": "DBAV",
        "Name": "SQL Server",
        "Logo": "../../assets/images/DBAV.png"
    },
    {
        "Id" :8,
        "IdName": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "../../assets/images/DBBS.png"
    },
    {
        "Id" :9,
        "IdName": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "../../assets/images/GAME.png"
    },
    {
        "Id" :10,
        "IdName": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "../../assets/images/HTCS.jpg"
    },
    {
        "Id" :11,
        "IdName": "INMA",
        "Name": "Internet Marketing",
        "Logo": "../../assets/images/INMA.jpg"
    },
    {
        "Id" :12,
        "IdName": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "../../assets/images/JAAV.png"
    },
    {
        "Id" :13,
        "IdName": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "../../assets/images/JABS.png"
    },
    {
        "Id" :14,
        "IdName": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "../../assets/images/JSPR.png"
    },
    {
        "Id" :15,
        "IdName": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "../../assets/images/LAYO.jpg"
    },
    {
        "Id" :16,
        "IdName": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "../../assets/images/MOWE.png"
    },
    {
        "Id" :17,
        "IdName": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "../../assets/images/PHPP.png"
    },
    {
        "Id" :18,
        "IdName": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "../../assets/images/PMAG.jpg"
    },
    {
        "Id" :19,
        "IdName": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "../../assets/images/VBPR.png"
    },
    {
        "Id" :20,
        "IdName": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "../../assets/images/WEBU.jpg"
    }
]
  constructor() { }

  ngOnInit() {
  }

}
