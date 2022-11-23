import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcmpComponent } from './testcmp.component';

describe('TestcmpComponent', () => {
  let component: TestcmpComponent;
  let fixture: ComponentFixture<TestcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
