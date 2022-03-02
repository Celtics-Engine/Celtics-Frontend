import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPostPageComponent } from './asset-post-page.component';

describe('AssetPostPageComponent', () => {
  let component: AssetPostPageComponent;
  let fixture: ComponentFixture<AssetPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
