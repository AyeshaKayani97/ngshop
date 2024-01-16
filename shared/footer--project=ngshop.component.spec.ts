import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterProjectNgshopComponent } from './footer--project=ngshop.component';

describe('FooterProjectNgshopComponent', () => {
  let component: FooterProjectNgshopComponent;
  let fixture: ComponentFixture<FooterProjectNgshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterProjectNgshopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterProjectNgshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
