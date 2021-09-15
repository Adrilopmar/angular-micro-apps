import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAppComponent } from './qr-app.component';

describe('QrAppComponent', () => {
  let component: QrAppComponent;
  let fixture: ComponentFixture<QrAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
