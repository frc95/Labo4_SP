import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUsuarioComponent } from './email-usuario.component';

describe('EmailUsuarioComponent', () => {
  let component: EmailUsuarioComponent;
  let fixture: ComponentFixture<EmailUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
