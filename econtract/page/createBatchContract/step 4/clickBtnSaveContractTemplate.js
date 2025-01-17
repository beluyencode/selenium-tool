const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function clickBtnSaveContractTemplate(driver) {
    try {
        const logger = new Logger('Click button save contract template');
        logger.start();

        await driver.wait(until.elementLocated(
            By.css('.confirm-document-step-container')),
            config.timeout || 10000
        );

        // Tìm button Send Contract
        let saveContractTemplate = await driver.wait(until.elementLocated(
            By.xpath("//span[contains(.,'Save contract template')]")),
            config.timeout || 10000
        );

        // Click vào button Send Contract 
        await saveContractTemplate.click();


        // // Đợi popup load lên
        // await driver.wait(until.elementLocated(
        //     By.css('.confirm_popup_content')),
        //     config.timeout || 10000
        // );

        // // Tìm button Close
        // let closeButton = await driver.wait(until.elementLocated(
        //     By.xpath("//div[@id='confirm_popup']/div[2]/div[2]/button")),
        //     config.timeout || 10000
        // );

        // // Click vào button Close
        // await closeButton.click();

        await logger.stop();
    } finally {

    }
}