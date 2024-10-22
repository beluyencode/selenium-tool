const config = require('../../../config.json');
const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function skipTourGuide(driver) {
    try {
        const logger = new Logger('Skip tour guide');
        logger.start();
        
        // Tìm button skip tour guide
        let skipButton = await driver.findElement(By.xpath("//button[contains(.,'Skip')]"));

        // Click button skip tour guide
        await skipButton.click();

        // Chờ cho skipButton biến mất
        await driver.wait(until.stalenessOf(skipButton), config.timeout || 10000);

        logger.stop();
    } catch {
        return false;
    } finally {
        
    }
}