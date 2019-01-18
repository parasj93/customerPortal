import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinAttriburesComponent } from './cabin-attribures.component';

describe('CabinAttriburesComponent', () => {
  let component: CabinAttriburesComponent;
  let fixture: ComponentFixture<CabinAttriburesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinAttriburesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinAttriburesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
