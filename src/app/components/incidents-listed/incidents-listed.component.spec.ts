import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsListedComponent } from './incidents-listed.component';

describe('IncidentsListedComponent', () => {
  let component: IncidentsListedComponent;
  let fixture: ComponentFixture<IncidentsListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IncidentsListedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
