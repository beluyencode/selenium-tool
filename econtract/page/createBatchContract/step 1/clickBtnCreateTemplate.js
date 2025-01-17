const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function clickBtnCreateTemple(driver) {
    try {
        const logger = new Logger('Click Button Create Template');
        logger.start();

        // Tìm nút taọ mẫu lô 
        let createTeamplate = await driver.findElement(By.xpath("//button[2]"));

        // Click button tạo mẫu hợp đồng lô
        await createTeamplate.click();

        // Chờ load trang tạo hợp đồng
        await driver.wait(until.titleIs('Xmate Econtract - ' + 'Create contract'), config.timeout || 10000);

        await logger.stop();
    } finally {

    }
}