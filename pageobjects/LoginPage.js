const { By, Key, until } = require('selenium-webdriver');

class Login {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.demoblaze.com/index.html'; // Replace with your login page URL
    this.usernameInput = By.id('loginusername'); // Replace with the actual ID of the username input field
    this.passwordInput = By.id('loginpassword'); // Replace with the actual ID of the password input field
    this.loginButton = By.xpath('//button[contains(text(), "Log in")]'); // Replace with the actual ID of the login button
  }

  async open() {
    await this.driver.get(this.url);
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
    await this.driver.findElement(this.passwordInput).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }
}

module.exports = Login;
