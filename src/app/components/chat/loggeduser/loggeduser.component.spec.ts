import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggeduserComponent } from './loggeduser.component';

describe('LoggeduserComponent', () => {
  let component: LoggeduserComponent;
  let fixture: ComponentFixture<LoggeduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggeduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggeduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
