import { AppCadastroPage } from './app.cadastro.po';
import { browser, by, element, ElementFinder, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const EC = protractor.ExpectedConditions;

export const click = async (el: ElementFinder, time: number = 4000) => {
  await browser.wait(EC.presenceOf(el), time);
  await browser.wait(EC.elementToBeClickable(el), time);
  return el.click();
}

describe('Testes do formulario de cadastro', () => {
  let page: AppCadastroPage;

  beforeEach(() => {
    page = new AppCadastroPage();
  });

  it('deve navegar até formulário de cadastro', () => {
    page.iniciarNavegacao();
    expect(page.obterTituloCadastro()).toEqual('Demo Cadastro');    
  });

  it('deve preencher formulário de cadastro com sucesso', () => {
    page.campoNome.sendKeys('Eduardo Pires');
    page.campoCPF.sendKeys('30390600822');
    page.campoEmail.sendKeys('teste@teste.com');
    page.campoSenha.sendKeys('Teste@123');
    page.campoSenhaConfirmacao.sendKeys('Teste@123');

    click(element(by.id('Registrar')))
    page.esperar(4000);

    expect(page.obterResultadoCadastro()).toContain('"cpf":"30390600822"');
  });

  it('deve validar senhas diferentes', () => {
    page.iniciarNavegacao();

    page.campoNome.sendKeys('Eduardo Pires');
    page.campoCPF.sendKeys('30390600822');
    page.campoEmail.sendKeys('teste@teste.com');
    page.campoSenha.sendKeys('Teste@2123');
    page.campoSenhaConfirmacao.sendKeys('Teste@123');

    page.campoSenha.click();

    expect(page.obterErroSenha()).toContain('As senhas não conferem');
  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
