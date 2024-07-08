import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicToolbarComponent } from './dynamic-toolbar.component';

describe('DynamicToolbarComponent', () => {
  let component: DynamicToolbarComponent;
  let fixture: ComponentFixture<DynamicToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicToolbarComponent]
    });
    fixture = TestBed.createComponent(DynamicToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
