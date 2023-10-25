import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTaskComponent } from './get-task.component';

describe('GetTaskComponent', () => {
  let component: GetTaskComponent;
  let fixture: ComponentFixture<GetTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTaskComponent]
    });
    fixture = TestBed.createComponent(GetTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
