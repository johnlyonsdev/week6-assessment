import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

test('Check that clicking the upper left square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let square = await (await driver).findElement(By.id('cell-0'));
    await square.click();
    await driver.sleep(3000)
})