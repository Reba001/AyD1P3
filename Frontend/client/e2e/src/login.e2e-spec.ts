import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

describe('Pruebas funcionales Login', () => {
  let login: LoginPage;

  beforeEach(() => {
    login = new LoginPage();
  });

  describe('Pruebas funcinales de login',()=>{
    it('El usuario desea ingresar al login de la aplicación', () => {
        login.navigateTo();
        expect(login.rootElement().isDisplayed()).toEqual(true);
    });
    it('El usuario desea registrarse', () => {
        login.navigateToRegistro()
        let page=login.getRegistrationPage();
        expect(page.isDisplayed()).toBeTruthy();
      });
    it('El usuario ingresa correctamente a la aplicación', () => {
        login.navigateTo();
        login.setValuesLogin("correo@correo", "123456");
        expect(login.inputEmail.getAttribute('value')).toEqual('correo@correo');
        expect(login.inputPassword.getAttribute('value')).toEqual('123456')
        //login.btnSesion.click();
    });
    it('El usuario no ingresa correctamente', () => {
        login.navigateTo();
        login.setValuesLogin("correo@correo", "123456");
        expect(login.inputEmail.getAttribute('value')).toEqual('c@correo');
        expect(login.inputPassword.getAttribute('value')).toEqual('456')
        //login.btnSesion.click();
    });
    
  })
});
