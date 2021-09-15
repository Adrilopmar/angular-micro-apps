import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-app',
  templateUrl: './qr-app.component.html',
  styleUrls: ['./qr-app.component.css']
})
export class QrAppComponent implements OnInit {

  constructor() { }
  qrSize:number=250
  link:string=''

  generateQR(website:string, size:string):void{
    this.link = website
    this.qrSize = parseFloat(size)
    
    if (size =='' || this.qrSize <150 || this.qrSize >700 || isNaN(this.qrSize)){
      if(this.qrSize >700){
        this.qrSize=700
      }
      else{
        this.qrSize =150
      }
    }
  }
  ngOnInit(): void {
  }

}
