import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrBarcodePageRoutingModule } from './qr-barcode-routing.module';

import { QrBarcodePage } from './qr-barcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrBarcodePageRoutingModule
  ],
  declarations: [QrBarcodePage]
})
export class QrBarcodePageModule {}
