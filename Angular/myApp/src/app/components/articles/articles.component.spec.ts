import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:Angular/myApp/src/app/public/errors/not-found/not-found.component.spec.ts
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
========
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
>>>>>>>> b045d9d601015eb5243096fb86977487817c5f91:Angular/myApp/src/app/components/articles/articles.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
