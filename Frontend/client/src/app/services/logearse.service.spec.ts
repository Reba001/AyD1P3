import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { LogearseService } from './logearse.service';
import { LoginComponent } from '../components/login/login.component';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
  put = jasmine.createSpy('httpClient.put');
}

let url = 'http://localhost:3000/login';

describe('LogearseService', () => {
  let service: LogearseService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let user:User;
  let httpClientMock: HttpClientMock;

    const UsuarioMock: User ={
    usuario:'Usuarioprueba',
    password:'passwordprueba'  
}

const UsuarioMockVacio: User ={
  usuario:'',
  password:''
}


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[{
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    })
    .compileComponents();
  });

  it('user para buscar usuario debería ser string', () => {
    expect(user.usuario).toEqual(jasmine.any(String));
  });

  it('debería de buscar usuario con mock de objeto', () => {
    const catObservable: Observable<User> = of(UsuarioMock);
    httpClientMock.post.and.returnValue(catObservable);
      expect(service.login(UsuarioMock)).toEqual(jasmine.any(String));
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
