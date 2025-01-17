const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function clickBtnDocumaker(driver) {
    try {
        const logger = new Logger('Click Button Documaker');
        logger.start();

        // Tìm button Documaker
        let btnDocumaker = await driver.findElement(By.xpath("//div[@id='create-doc-container']/div[2]/div/div[2]/div/div/div/div[3]/div[2]/div"));

        await driver.executeScript('arguments[0].scrollIntoView(true);', btnDocumaker);

        await driver.sleep(1000);

        // Click button Documaker
        await btnDocumaker.click();

        await logger.stop();
    } finally {

    }
}