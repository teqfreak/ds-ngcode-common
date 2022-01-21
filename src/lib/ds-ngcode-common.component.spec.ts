import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNgcodeCommonComponent } from './ds-ngcode-common.component';

describe('DsNgcodeCommonComponent', () => {
  let component: DsNgcodeCommonComponent;
  let fixture: ComponentFixture<DsNgcodeCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNgcodeCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsNgcodeCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
