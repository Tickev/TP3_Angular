import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudianthorsParisComponent } from './etudianthors-paris.component';

describe('EtudianthorsParisComponent', () => {
  let component: EtudianthorsParisComponent;
  let fixture: ComponentFixture<EtudianthorsParisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudianthorsParisComponent]
    });
    fixture = TestBed.createComponent(EtudianthorsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
