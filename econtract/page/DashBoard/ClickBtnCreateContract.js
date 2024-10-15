const config = require('../../../config.json');
const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function ClickBtnCreateContract(driver) {
    try {
        const logger = new Logger('Click Button Create Contract');
        logger.start();
        
        // Tìm button tạo hợp đồng
        let createContractBtn = await driver.findElement(By.xpath("//div[@id='create-contract']/span"));

        // Click button tạo hợp đồng
        await createContractBtn.click();

        // Chờ load trang tạo hợp đồng
        await driver.wait(until.titleIs('Xmate Econtract - ' + 'Create documentation'), 10000);

        logger.stop();
    } finally {
        
    }
}