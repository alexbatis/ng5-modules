import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRootComponent } from './content-root.component';

describe('ContentRootComponent', () => {
  let component: ContentRootComponent;
  let fixture: ComponentFixture<ContentRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
