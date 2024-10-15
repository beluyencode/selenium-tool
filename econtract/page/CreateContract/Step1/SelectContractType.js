const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function selectContractType(driver) {
    try {
        const logger = new Logger('Select Contract Type');
        logger.start();

        // Chọn loại hợp đồng
        let selectContractType = await driver.selectContractType(By.css('#contract-type-input'));

        await logger.stop();
    } finally {

    }
}