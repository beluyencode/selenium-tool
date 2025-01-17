const config = require('../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addOrganization(driver, contact, organizationName) {
    try {
        const logger = new Logger('Add a Contact ' + contact.name);
        logger.start();

        // Tìm nút contact list 
        let btnContactList = await driver.findElement(By.xpath("//span[contains(.,'Contact List')]"));

        // Click nút contact list 
        await btnContactList.click();

        // Tìm nút contact
        let btnContact = await driver.wait(until.elementLocated(
            By.css("a[data-menu-xmlid='mate_sign.menu_mate_sign_contact']")),
            config.timeout || 10000
        );

        // Click nút contact
        await btnContact.click();

        // Tìm nút new contact
        let buttonNew = await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            config.timeout || 10000
        );

        // Click nút new
        await buttonNew.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), config.timeout || 10000);

        // Tìm phần tử input tên contact
        let inputName = await driver.findElement(By.css("input[id='name']"));

        // Nhap ten contact
        await inputName.sendKeys(contact.name);

        // Tìm phần tử input tên contact
        let inputEmail = await driver.findElement(By.css("input[id='email']"));

        // Nhap ten email
        await inputEmail.sendKeys(contact.email);

        if (organizationName) {
            // Tìm select organization
            let selectOrganization = await driver.findElement(By.css("input[id='organization_id']"));

            // Nhập tên tổ chức
            await selectOrganization.sendKeys(organizationName);

            // Tìm item organization
            let organizationItem = await driver.wait(until.elementLocated(
                By.xpath(`//div[@name='organization_id']//a[text()='${organizationName}']`)),
                config.timeout || 10000
            );

            // Click item
            await organizationItem.click();
        }

        // Tìm phần tử button với thuộc tính data-tooltip là "Save manually"
        let saveButton = await driver.findElement(By.css("button[data-tooltip='Save manually']"));

        // Click vào button Save
        await saveButton.click();

        await driver.wait(until.titleIs('Xmate Econtract - ' + contact.name), config.timeout || 10000);

        logger.stop();
    } finally {

    }
}