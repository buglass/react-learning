require ('selenium-webdriver/chrome');
require ('chromedriver');

const { Builder, By, Key, until } = require('selenium-webdriver');

describe('city search tests', () => {

    beforeEach(() => {
        jest.setTimeout(10000)
    });

    it('Valid should return results', async () => {
        const cityName = 'Bradford';
        var driver = new Builder().forBrowser('chrome').build();
        try
        {
            await driver.get('http://localhost:3000');
            await driver.findElement(By.id('searchId')).sendKeys(cityName, Key.RETURN);
            var headerElement = await driver.findElement(By.id('cityName'));
            await driver.wait(until.elementTextContains(headerElement, cityName));
            headerElement.getText().then(t => expect(t).toBe(cityName));
        }
        finally
        {
            driver.close();
        }
    }),
    it('Invalid should return error', async () => {
        const cityName = 'Atlantis';
        const errorMessage = 'city not found';
        var driver = new Builder().forBrowser('chrome').build();
        try
        {
            await driver.get('http://localhost:3000');
            await driver.findElement(By.id('searchId')).sendKeys(cityName, Key.RETURN);
            var errorElement = await driver.findElement(By.id('errorMessage'));
            await driver.wait(until.elementTextContains(errorElement, errorMessage));
            errorElement.getText().then(t => expect(t).toBe(errorMessage));
        }
        finally
        {
            driver.close();
        }
    });
})