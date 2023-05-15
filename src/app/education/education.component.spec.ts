import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { educationComponent } from './education.component';

describe('educationComponent', () => {
  let component: educationComponent;
  let fixture: ComponentFixture<educationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ educationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(educationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
