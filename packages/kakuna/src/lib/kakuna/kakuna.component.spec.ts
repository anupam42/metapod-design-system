import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KakunaComponent } from './kakuna.component';

describe('KakunaComponent', () => {
  let component: KakunaComponent;
  let fixture: ComponentFixture<KakunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KakunaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KakunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
