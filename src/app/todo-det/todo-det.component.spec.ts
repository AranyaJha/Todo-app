import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetComponent } from './todo-det.component';

describe('TodoDetComponent', () => {
  let component: TodoDetComponent;
  let fixture: ComponentFixture<TodoDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
