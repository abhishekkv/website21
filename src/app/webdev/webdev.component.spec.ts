import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { webdevComponent } from './webdev.component';

describe('webdevComponent', () => {
  let component: webdevComponent;
  let fixture: ComponentFixture<webdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ webdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(webdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
