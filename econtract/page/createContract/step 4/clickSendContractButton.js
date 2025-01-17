const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');
const continueStep = require('../step 1/continueStep');

module.exports = async function clickSendContractButton(driver) {
    try {
        const logger = new Logger('Click button send contract');
        logger.start();

        await driver.wait(until.elementLocated(
            By.css('.confirm-document-step-container')),
            config.timeout || 10000
        );

        // Tìm button Send Contract
        let sendContractButton = await driver.wait(until.elementLocated(
            By.css("#send_contract")),
            config.timeout || 10000
        );

        // Click vào button Send Contract 
        await sendContractButton.click();


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