import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardsSectionComponent } from './task-cards-section.component';

describe('TaskCardsSectionComponent', () => {
  let component: TaskCardsSectionComponent;
  let fixture: ComponentFixture<TaskCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
