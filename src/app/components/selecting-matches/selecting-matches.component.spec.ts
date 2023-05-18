import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingMatchesComponent } from './selecting-matches.component';

describe('SelectingMatchesComponent', () => {
  let component: SelectingMatchesComponent;
  let fixture: ComponentFixture<SelectingMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectingMatchesComponent]
    });
    fixture = TestBed.createComponent(SelectingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
