const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');


describe ('Login', function() {

    before(async function () {
        // Create a new WebDriver instance (Chrome)
        driver = new Builder().forBrowser('chrome').build();
      });

    it ('User Login', async function(done){
        const username = "cacanindin";
        const password = "cacanindin123";
        const welcome = "Welcome cacanindin"


        driver.manage().window().maximize();

        await driver.get('https://www.demoblaze.com/index.html');

        await driver.findElement(By.id('login2')).click();

        const loginModal = await driver.wait(
            until.elementIsVisible(driver.findElement(By.id('logInModal'))),
            5000
          );
        
        await loginModal.findElement(By.id('loginusername')).sendKeys(username);
        await loginModal.findElement(By.id('loginpassword')).sendKeys(password);  
        await loginModal.findElement(By.xpath('//button[contains(text(), "Log in")]')).click();
       
        const logout = await driver.wait(
          until.elementIsVisible(driver.findElement(By.xpath('//*[@id="cartur"]'))),
          5000
        );

        await logout.findElement(By.xpath('//*[@id="cartur"]')).click();
        
          done()
    });

    after(async function () {
        // await driver.quit();
    })
});



















