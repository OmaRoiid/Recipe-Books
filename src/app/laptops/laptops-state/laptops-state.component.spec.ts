import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsStateComponent } from './laptops-state.component';

describe('LaptopsStateComponent', () => {
  let component: LaptopsStateComponent;
  let fixture: ComponentFixture<LaptopsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopsStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
