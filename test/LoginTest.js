const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');
const LoginPage = require('../pageobjects/LoginPage');

describe('Login Test', function () {
  let driver;
  let loginPage;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    await loginPage.open();
    driver.manage().window().maximize();
  });

  after(async function () {
    await driver.quit();
  });

  it('should log in successfully', async function () {
    const loginModal = await driver.wait(
      until.elementIsVisible(driver.findElement(By.id('logInModal'))),
      5000
    );
    await loginPage.login('cacanindin', 'cacanindin123'); // Replace with your test username and password
  });

 
});