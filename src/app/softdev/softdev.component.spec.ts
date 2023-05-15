import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { softdevComponent } from './softdev.component';

describe('softdevComponent', () => {
  let component: softdevComponent;
  let fixture: ComponentFixture<softdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ softdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(softdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
