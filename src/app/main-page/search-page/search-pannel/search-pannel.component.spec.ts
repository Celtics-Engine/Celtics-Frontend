import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPannelComponent } from './search-pannel.component';

describe('SearchPannelComponent', () => {
  let component: SearchPannelComponent;
  let fixture: ComponentFixture<SearchPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
