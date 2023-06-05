import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjydhComponent } from './mjydh.component';

describe('MjydhComponent', () => {
  let component: MjydhComponent;
  let fixture: ComponentFixture<MjydhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MjydhComponent]
    });
    fixture = TestBed.createComponent(MjydhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
