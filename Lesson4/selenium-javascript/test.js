require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google', async function() {
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).click();
        await driver.findElement(By.name('q')).sendKeys('brunoyam', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        await driver.findElement(By.name('q')).clear();

        let title = await driver.getTitle();
        assert.equal(title, 'brunoyam - Google Search');              
    });

    after(() => driver && driver.quit());
})