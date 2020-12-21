import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsRowComponent } from './films-row.component';

describe('FilmsRowComponent', () => {
  let component: FilmsRowComponent;
  let fixture: ComponentFixture<FilmsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
