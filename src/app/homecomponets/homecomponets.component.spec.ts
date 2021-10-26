import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomponetsComponent } from './homecomponets.component';

describe('HomecomponetsComponent', () => {
  let component: HomecomponetsComponent;
  let fixture: ComponentFixture<HomecomponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecomponetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecomponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
