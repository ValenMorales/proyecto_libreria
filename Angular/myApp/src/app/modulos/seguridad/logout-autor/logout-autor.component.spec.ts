import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAutorComponent } from './logout-autor.component';

describe('LogoutAutorComponent', () => {
  let component: LogoutAutorComponent;
  let fixture: ComponentFixture<LogoutAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
