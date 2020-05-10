import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrBarcodePage } from './qr-barcode.page';

describe('QrBarcodePage', () => {
  let component: QrBarcodePage;
  let fixture: ComponentFixture<QrBarcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrBarcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrBarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
