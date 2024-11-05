import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesContentComponent } from './likes-content.component';

describe('LikesContentComponent', () => {
  let component: LikesContentComponent;
  let fixture: ComponentFixture<LikesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
