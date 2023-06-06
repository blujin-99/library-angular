import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsErrorComponent } from './bs-error.component';

describe('BsErrorComponent', () => {
  let component: BsErrorComponent;
  let fixture: ComponentFixture<BsErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsErrorComponent]
    });
    fixture = TestBed.createComponent(BsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
