import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokonekoComponent } from './dokoneko.component';

describe('DokonekoComponent', () => {
  let component: DokonekoComponent;
  let fixture: ComponentFixture<DokonekoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DokonekoComponent]
    });
    fixture = TestBed.createComponent(DokonekoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
