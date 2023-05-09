import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilautorComponent } from './perfilautor.component';

describe('PerfilautorComponent', () => {
  let component: PerfilautorComponent;
  let fixture: ComponentFixture<PerfilautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilautorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
