import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRootComponent } from './about-root.component';

describe('AboutRootComponent', () => {
  let component: AboutRootComponent;
  let fixture: ComponentFixture<AboutRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
