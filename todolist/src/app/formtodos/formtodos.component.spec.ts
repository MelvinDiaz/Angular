import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtodosComponent } from './formtodos.component';

describe('FormtodosComponent', () => {
  let component: FormtodosComponent;
  let fixture: ComponentFixture<FormtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormtodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
