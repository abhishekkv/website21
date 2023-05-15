import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { businessComponent } from './business.component';

describe('businessComponent', () => {
  let component: businessComponent;
  let fixture: ComponentFixture<businessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ businessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(businessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
