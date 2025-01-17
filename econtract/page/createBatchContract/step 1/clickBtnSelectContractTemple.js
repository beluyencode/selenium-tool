const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function clickBtnSelectContractTemple(driver) {
    try {
        const logger = new Logger('Click Button Create Batch Contract');
        logger.start();

        // Tìm nút chọn mẫu hợp đồng lô
        let seclectContractTemple = await driver.findElement(By.xpath("//div/div[2]/div/button"));

        // Click button tạo mẫu hợp đồng lô
        await seclectContractTemple.click();

        // Chờ load trang tạo hợp đồng
        await driver.wait(until.titleIs('Xmate Econtract - ' + 'Create contract'), config.timeout || 10000);

        await logger.stop();
    } finally {

    }
}