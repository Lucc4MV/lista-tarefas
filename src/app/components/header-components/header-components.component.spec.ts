import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentsComponent } from './header-components.component';

describe('HeaderComponentsComponent', () => {
  let component: HeaderComponentsComponent;
  let fixture: ComponentFixture<HeaderComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
