const config = require('../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');
const addContact = require('./addContact');

module.exports = async function addOrganization(driver, organization) {
    try {
        const logger = new Logger('Add an Organization ' + organization.name);
        logger.start();

        // Tìm nút contact list 
        let btnContactList = await driver.findElement(By.xpath("//span[contains(.,'Contact List')]"));

        // Click nút contact list 
        await btnContactList.click();

        // Tìm nút organization
        let btnOrganization = await driver.wait(until.elementLocated(
            By.css("a[data-menu-xmlid='mate_sign.menu_mate_sign_organization']")),
            config.timeout || 10000
        );

        // Click nút organization
        await btnOrganization.click();

        // Tìm nút new organization
        let buttonNew = await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            config.timeout || 10000
        );

        // Click nút new
        await buttonNew.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), config.timeout || 10000);

        // Tìm phần tử input tên tổ chức
        let inputElement = await driver.findElement(By.css("input[id='name']"));

        // Nhap ten to chuc
        await inputElement.sendKeys(organization.name);

        // Tìm phần tử button với thuộc tính data-tooltip là "Save manually"
        let saveButton = await driver.findElement(By.css("button[data-tooltip='Save manually']"));

        // Click vào button Save
        await saveButton.click();


        await driver.wait(until.titleIs('Xmate Econtract - ' + organization.name), config.timeout || 10000);

        for (const contact of organization.contact) {
            await addContact(driver, contact, organization.name);
        }

        logger.stop();
    } finally {

    }
}