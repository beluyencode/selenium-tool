const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function selectContractType(driver) {
    try {
        const logger = new Logger('Click continue button');
        logger.start();

        // Tìm nút tiếp tục
        let continueButton = await driver.findElement(By.css('#continue_step'));

        // Click nút tiếp tục
        await continueButton.click();
     
        await logger.stop();
    } finally {

    }
}

