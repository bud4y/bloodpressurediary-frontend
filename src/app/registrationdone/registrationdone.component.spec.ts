import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationdoneComponent } from './registrationdone.component';

describe('RegistrationdoneComponent', () => {
  let component: RegistrationdoneComponent;
  let fixture: ComponentFixture<RegistrationdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
