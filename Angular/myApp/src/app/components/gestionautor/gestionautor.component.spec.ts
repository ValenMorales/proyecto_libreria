import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionautorComponent } from './gestionautor.component';

describe('GestionautorComponent', () => {
  let component: GestionautorComponent;
  let fixture: ComponentFixture<GestionautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionautorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
