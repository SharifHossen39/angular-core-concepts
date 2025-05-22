import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDeatilsComponent } from './fruit-deatils.component';

describe('FruitDeatilsComponent', () => {
  let component: FruitDeatilsComponent;
  let fixture: ComponentFixture<FruitDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitDeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
