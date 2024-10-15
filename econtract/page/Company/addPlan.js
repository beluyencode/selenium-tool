const config = require('../../../helper/config');
const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addPlan(driver) {
    try {
        const logger = new Logger('Add plan');
        logger.start();
        // Tìm button settings
        let settings = await driver.findElement(By.xpath("//header//*[@title='More Menu']//span[text()='Settings']"));
        
        // Click vào button settings
        await settings.click();

        // Tìm button Plan
        let planButton = await driver.wait(until.elementLocated(
            By.xpath("//a[text()='Plan']")),
            10000
        ); 

        // Click vào button Companies
        await planButton.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - Subscriptions Plan'), 10000);

        // Tìm button Create
        let buttonElement =  await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            10000
        );
       
        // Click vào button Create
        await buttonElement.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), 10000);

        // Tìm phần tử input có placeholder là 'e.g. Standard'
        let inputElement = await driver.findElement(By.css("input[placeholder='e.g. Standard']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await inputElement.sendKeys(config.econtract.plan.name);

        // Tìm phần tử input contract_limit
        let contractLimit = await driver.findElement(By.css("input[id='contract_limit']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await contractLimit.sendKeys(config.econtract.plan.contractLimit);

        // Tìm phần tử input duration
        let duration = await driver.findElement(By.css("input[id='duration']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await duration.sendKeys(config.econtract.plan.expiredDate);

        // Tìm phần tử input storage_limit
        let storageLimit = await driver.findElement(By.css("input[id='storage_limit']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await storageLimit.sendKeys(config.econtract.plan.storageLimit);

        // Tìm phần tử input ca_sign_feature
        let checkbox = await driver.findElement(By.css("input[id='ca_sign_feature']"));

        // click vào checkbox
        await checkbox.click();


        // Tìm phần tử button với thuộc tính data-tooltip là "Save manually"
        let saveButton = await driver.findElement(By.css("button[aria-label='Save manually']"));

        // Click vào button Save
        await saveButton.click();


        await driver.wait(until.titleIs('Xmate Econtract - ' + config.econtract.plan.name), 10000);

        await logger.stop();
    } finally {
        
    }
}