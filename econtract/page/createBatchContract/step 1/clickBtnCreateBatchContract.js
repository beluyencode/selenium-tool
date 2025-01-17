const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function clickBtnCreateBatchContract(driver) {
    try {
        const logger = new Logger('Click Button Create Batch Contract');
        logger.start();

        // Tìm button tạo mẫu hợp đồng lô
        let createContractBtn = await driver.findElement(By.xpath("//a[@id='batch']"));

        // Click button tạo mẫu hợp đồng lô
        await createContractBtn.click();

        // Chờ load trang tạo hợp đồng
        await driver.wait(until.titleIs('Xmate Econtract - ' + 'Create contract'), config.timeout || 10000);

        await logger.stop();
    } finally {

    }
}