import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingPhotoComponent } from './changing-photo.component';

describe('ChangingPhotoComponent', () => {
  let component: ChangingPhotoComponent;
  let fixture: ComponentFixture<ChangingPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangingPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
