import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddingPage } from './adding.page';

describe('AddingPage', () => {
  let component: AddingPage;
  let fixture: ComponentFixture<AddingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

