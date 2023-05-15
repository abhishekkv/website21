import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { hospitalityComponent } from './hospitality.component';

describe('hospitalityComponent', () => {
  let component: hospitalityComponent;
  let fixture: ComponentFixture<hospitalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ hospitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(hospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
