import { browser, by, element, ElementFinder } from 'protractor';

export class LoginPage {

    inputEmail: ElementFinder;
    inputPassword: ElementFinder;
    inputRol:ElementFinder;
    btnSesion: ElementFinder;
    constructor(){
        this.inputEmail = element(by.model('username'));
        this.inputPassword = element(by.model('password'));
        //this.btnSesion = element(by.binding('TryLogin'));
        this.inputRol = element(by.id('rol'));
    }
    async setValuesLogin(correo: string, pass: string) {
        await this.inputEmail.sendKeys(correo);
        await this.inputPassword.sendKeys(pass);
        await this.inputRol.sendKeys(1);
    }
  
  navigateToRegistro() {
    return browser.get('/registro-usuario') as Promise<unknown>;
  }
  getRegistrationButton() {
      throw new Error('Method not implemented.');
  }
  getErrorMessage(): any {
      return 'Credenciales incorrectas vuelva a ingresarlas'
  }
  enterPassword(pass: string) {
      throw new Error('Method not implemented.');
  }
  enterEmail(email: string) {

  }
  getRegistrationPage(){
    return element(by.css('app-registro-usuario'));
  }
  rootElement() {
      return element(by.css('app-login'));
  }
  navigateTo(): Promise<unknown> {
    return browser.get('/login') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-login .content span')).getText() as Promise<string>;
  }


}
