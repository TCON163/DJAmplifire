import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebplayerComponent } from './webplayer.component';

describe('WebplayerComponent', () => {
  let component: WebplayerComponent;
  let fixture: ComponentFixture<WebplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
