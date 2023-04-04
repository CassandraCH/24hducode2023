import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoComponent } from './algo.component';

describe('RacesComponent', () => {
  let component: AlgoComponent;
  let fixture: ComponentFixture<AlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
