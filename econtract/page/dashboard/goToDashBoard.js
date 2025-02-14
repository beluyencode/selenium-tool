const config = require('../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function goToDashBoard(driver) {
    try {
        const logger = new Logger('Go to Dash Board');
        logger.start();

        // Tìm button trang tổng quan
        let dashBoardBtn = await driver.findElement(By.xpath("//header//div[@role='menu']//a[text()='Overview']"));

        // Click button trang tổng quan
        await dashBoardBtn.click();

        // Chờ load trang tổng quan hoàn tất
        await driver.wait(until.titleIs('Xmate Econtract - ' + 'Overview'), config.timeout || 10000);

        logger.stop();
    } finally {

    }
}