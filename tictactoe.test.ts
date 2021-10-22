import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('https://week6assessmentjl.herokuapp.com/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(3000)
});

test('Check that clicking the upper left square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let square = await (await driver).findElement(By.id('cell-0'));
    await square.click();
    let squareText = await driver.findElement(By.id("cell-0")).getText()
        expect(squareText).toEqual('X')
    await driver.sleep(3000)
})

test('Check that clicking the upper right square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let square = await (await driver).findElement(By.id('cell-2'));
    await square.click();
    let squareText = await driver.findElement(By.id("cell-2")).getText()
        expect(squareText).toEqual('X')
    await driver.sleep(3000)
})

test('Check that clicking the lower right square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let square = await (await driver).findElement(By.id('cell-8'));
    await square.click();
    let squareText = await driver.findElement(By.id("cell-8")).getText()
        expect(squareText).toEqual('X')
    await driver.sleep(3000)
})

test('Check to see that the computer moves (adds an O) to a square after clicking on a random square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    let randomElement = Math.floor(Math.random() * 9)
    await button.click();
    await driver.sleep(500)
    let square = await (await driver).findElement(By.id(`cell-${randomElement}`));
    await square.click();
    await driver.sleep(500)
    let squareText = await driver.findElement(By.id(`cell-${randomElement}`)).getText()
        expect(squareText).toEqual('X')
    if (randomElement === 0) {
        let squareText = await driver.findElement(By.id(`cell-1`)).getText()
        expect(squareText).toEqual('O')
    } else {
           let squareText = await driver.findElement(By.id(`cell-0`)).getText()
        expect(squareText).toEqual('O')
    }
    await driver.sleep(2000)
})

test('Check that 3 Xs in a row gets the right(wrong) message', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let square = await (await driver).findElement(By.id('cell-6'));
    await square.click();
    square = await (await driver).findElement(By.id('cell-7'));
    await square.click();
    square = await (await driver).findElement(By.id('cell-8'));
    await square.click();
    let lossText = await driver.findElement(By.css("h1")).getText()
        expect(lossText).toEqual('X lost')
    await driver.sleep(3000)
})