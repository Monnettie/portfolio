import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlmoriComponent } from './girlmori.component';

describe('GirlmoriComponent', () => {
  let component: GirlmoriComponent;
  let fixture: ComponentFixture<GirlmoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirlmoriComponent]
    });
    fixture = TestBed.createComponent(GirlmoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
