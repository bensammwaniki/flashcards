import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincomponetsComponent } from './maincomponets.component';

describe('MaincomponetsComponent', () => {
  let component: MaincomponetsComponent;
  let fixture: ComponentFixture<MaincomponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincomponetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincomponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
