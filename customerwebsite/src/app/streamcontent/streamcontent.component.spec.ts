import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamcontentComponent } from './streamcontent.component';

describe('StreamcontentComponent', () => {
  let component: StreamcontentComponent;
  let fixture: ComponentFixture<StreamcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
