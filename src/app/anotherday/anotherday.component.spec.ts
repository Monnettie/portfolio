import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherdayComponent } from './anotherday.component';

describe('AnotherdayComponent', () => {
  let component: AnotherdayComponent;
  let fixture: ComponentFixture<AnotherdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherdayComponent]
    });
    fixture = TestBed.createComponent(AnotherdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
