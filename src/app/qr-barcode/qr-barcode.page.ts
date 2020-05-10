import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-qr-barcode',
  templateUrl: './qr-barcode.page.html',
  styleUrls: ['./qr-barcode.page.scss'],
})
export class QrBarcodePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
  }
  Scan()
  {
  
    this.barcodeScanner.scan().then(barcodeData => {
      alert(JSON.stringify(barcodeData));
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
