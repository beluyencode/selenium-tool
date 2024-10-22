const config = require('../../../helper/config');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addCompany(driver) {
    try {
        const logger = new Logger('Add company');
        logger.start();

        // Tìm button settings
        let settings = await driver.findElement(By.xpath("//header//*[@title='More Menu']//span[text()='Settings']"));

        // Click vào button settings
        await settings.click();

        // Tìm button Companies
        let companiesButton = await driver.wait(until.elementLocated(
            By.xpath("//a[text()='Companies']")),
            config.timeout || 10000
        );

        // Click vào button Companies
        await companiesButton.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - Companies'), config.timeout || 10000);

        // Tìm button Create
        let buttonElement = await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            config.timeout || 10000
        );

        // Click vào button Create
        await buttonElement.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), config.timeout || 10000);

        // Tìm phần tử input có placeholder là 'e.g. My Company'
        let inputElement = await driver.findElement(By.css("input[placeholder='e.g. My Company']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await inputElement.sendKeys(config.econtract.company.name);

        // Tìm phần tử button với thuộc tính data-tooltip là "Save manually"
        let saveButton = await driver.findElement(By.css("button[data-tooltip='Save manually']"));

        // Click vào button Save
        await saveButton.click();


        await driver.wait(until.titleIs('Xmate Econtract - ' + config.econtract.company.name), config.timeout || 10000);

        await logger.stop();
    } finally {

    }
}