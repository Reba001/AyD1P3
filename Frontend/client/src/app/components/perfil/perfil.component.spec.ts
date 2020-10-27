import { stringify } from '@angular/compiler/src/util';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';



describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let username:string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username no debería ser vacio', () => {
    expect(username).toEqual(jasmine.any(String));
  });

});
