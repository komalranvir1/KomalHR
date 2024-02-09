import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulizationComponent } from './regulization.component';

describe('RegulizationComponent', () => {
  let component: RegulizationComponent;
  let fixture: ComponentFixture<RegulizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegulizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegulizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
