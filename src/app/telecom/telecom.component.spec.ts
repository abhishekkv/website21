import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { telecomComponent } from './telecom.component';

describe('telecomComponent', () => {
  let component: telecomComponent;
  let fixture: ComponentFixture<telecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ telecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(telecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
