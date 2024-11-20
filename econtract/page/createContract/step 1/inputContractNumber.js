const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function inputContractNumber(driver) {
    try {
        const logger = new Logger('Input Contract Number');
        logger.start();

        let inputContractNumber = await driver.findElement(By.css('#doc-number'));

        inputContractNumber.sendKeys(config.econtract.create_contract.contractNumber);

        await logger.stop();
    } finally {

    }
}

