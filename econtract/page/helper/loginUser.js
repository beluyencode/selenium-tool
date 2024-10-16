const config = require('../../../helper/config');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function loginUser(driver, user) {
    try {
        const logger = new Logger('login econtract');
        logger.start();
        // Điều hướng đến trang đăng nhập
        await driver.get(config.econtract.url + 'web/login');

        // Tìm trường username và nhập giá trị
        await driver.findElement(By.id('login')).sendKeys(user.email);

        // Tìm trường password và nhập giá trị
        await driver.findElement(By.id('password')).sendKeys(user.password);

        // Gửi biểu mẫu đăng nhập
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Kiểm tra URL hiện tại của trang
        await driver.wait(until.urlContains(config.econtract.url + 'web#action='), 10000);

        await logger.stop();
    } finally {

    }
}