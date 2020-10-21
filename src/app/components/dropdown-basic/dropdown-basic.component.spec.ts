import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownBasicComponent } from './dropdown-basic.component';

describe('DropdownBasicComponent', () => {
  let component: DropDownBasicComponent;
  let fixture: ComponentFixture<DropDownBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
