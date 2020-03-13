import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNpmDummyComponent } from './ng-npm-dummy.component';

describe('NgNpmDummyComponent', () => {
  let component: NgNpmDummyComponent;
  let fixture: ComponentFixture<NgNpmDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNpmDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNpmDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
