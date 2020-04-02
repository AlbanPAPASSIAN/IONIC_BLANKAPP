import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), CommonModule, FormsModule, RouterModule.forChild([
        {
          path: '',
          component: HomePage
        }
      ])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('change title', () => {
  //   component.title = 'Hello world';
  //   expect(component.title).toBe('Hello world');
  // });

  // it('update title', () => {
  //   component.updateTitle();
  //   expect(component.title).toBe('New title');
  // });
});
