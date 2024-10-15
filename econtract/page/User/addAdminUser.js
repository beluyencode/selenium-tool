const config = require('../../../helper/config');
const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addAdminUser(driver) {
    try {
        const logger = new Logger('Add user admin');
        logger.start();

        // Tìm button settings
        let settings = await driver.findElement(By.xpath("//header//*[@title='More Menu']//span[text()='Settings']"));
        
        // Click vào button settings
        await settings.click();

        // Tìm button Users
        let usersButton = await driver.wait(until.elementLocated(
            By.xpath("//a[text()='Users']")),
            2000
        ); 

        // Click vào button Users
        await usersButton.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - Users'), 10000);

        // Tìm button Create
        let buttonElement =  await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            2000
        );
       
        // Click vào button Create
        await buttonElement.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), 10000);

        // Tìm phần tử input có placeholder là 'e.g. John Doe'
        let nameInput = await driver.findElement(By.css("input[placeholder='e.g. John Doe']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await nameInput.sendKeys(config.econtract.adminCompany.name);

        // Tìm phần tử input có placeholder là 'e.g. email@yourcompany.com'
        let emailInput = await driver.findElement(By.css("input[placeholder='e.g. email@yourcompany.com']"));
        
        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await emailInput.sendKeys(config.econtract.adminCompany.email);

        let saveButton = await driver.findElement(By.css("button[name='action_assign_company_admin']"));

        // Click vào button Save
        await saveButton.click();

        await driver.wait(until.elementLocated(
            By.css("button[name='action_unassign_company_admin']")),
            10000
        );

        // Tìm button action
        let actionButton = await driver.findElement(By.css("div.o_cp_action_menus"));

        // Click vào button action
        await actionButton.click();

        // Tìm button change password
        let changePasswordButton =  await driver.wait(until.elementLocated(
            By.xpath("//span[@class='dropdown-item o_menu_item'][text()='Change Password']")),
            10000
        );

        // Click vào button change password
        await changePasswordButton.click();

        // Tìm td change password
        let tdPasswordInput = await driver.wait(until.elementLocated(
            By.css("td[name='new_passwd']")),
            10000
        );

        // click vào input change password
        await tdPasswordInput.click();

        // Tìm input change password
        let passwordInput = await driver.wait(until.elementLocated(
            By.css("input[autocomplete='new-password']")),
            10000
        );

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await passwordInput.sendKeys(config.econtract.adminCompany.password);

        // Tìm Button confirm password
        let confirmPasswordButton = await driver.findElement(By.css("button[name='change_password_button']"));

        // Click vào button confirm password
        await confirmPasswordButton.click();

        await driver.wait(until.stalenessOf(confirmPasswordButton), 10000);
        
        logger.stop();
    } finally {
        
    }
}