import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPage } from './form.page';

describe('FormPage', () => {
  let component: FormPage;
  let fixture: ComponentFixture<FormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

