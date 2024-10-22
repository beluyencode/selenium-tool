const config = require('../../../helper/config');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');
const closeNotification = require('../helper/closeNotification');


module.exports = async function addUser(driver, user) {
    try {
        const logger = new Logger('Add user ' + user.name);
        logger.start();

        await closeNotification(driver)

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
        await driver.wait(until.titleIs('Xmate Econtract - Users'), config.timeout || 10000);

        // Tìm button Create
        let buttonElement = await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            2000
        );

        // Click vào button Create
        await buttonElement.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), config.timeout || 10000);

        // Tìm phần tử input có placeholder là 'e.g. John Doe'
        let nameInput = await driver.findElement(By.css("input[placeholder='e.g. John Doe']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await nameInput.sendKeys(user.name);

        // Tìm phần tử input có placeholder là 'e.g. email@yourcompany.com'
        let emailInput = await driver.findElement(By.css("input[placeholder='e.g. email@yourcompany.com']"));

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await emailInput.sendKeys(user.email);

        // Tìm nút lưu user
        let saveButton = await driver.findElement(By.css("button[aria-label='Save manually']"));

        // Click vào button Save
        await saveButton.click();

        await driver.wait(until.titleIs('Xmate Econtract - ' + user.name), config.timeout || 10000);

        // Xóa notification lưu thành công
        await closeNotification(driver)

        // Tìm button action
        let actionButton = await driver.wait(until.elementLocated(
            By.css("div.o_cp_action_menus")),
            config.timeout || 10000
        );

        // Click vào button action
        await actionButton.click();

        // Tìm button change password
        let changePasswordButton = await driver.wait(until.elementLocated(
            By.xpath("//span[@class='dropdown-item o_menu_item'][text()='Change Password']")),
            config.timeout || 10000
        );

        // Click vào button change password
        await changePasswordButton.click();

        // Tìm td change password
        let tdPasswordInput = await driver.wait(until.elementLocated(
            By.css("td[name='new_passwd']")),
            config.timeout || 10000
        );

        // click vào input change password
        await tdPasswordInput.click();

        // Tìm input change password
        let passwordInput = await driver.wait(until.elementLocated(
            By.css("input[autocomplete='new-password']")),
            config.timeout || 10000
        );

        // Thực hiện hành động với phần tử tìm thấy, ví dụ như nhập dữ liệu
        await passwordInput.sendKeys(user.password);

        // Tìm Button confirm password
        let confirmPasswordButton = await driver.findElement(By.css("button[name='change_password_button']"));

        // Click vào button confirm password
        await confirmPasswordButton.click();

        await driver.wait(until.stalenessOf(confirmPasswordButton), config.timeout || 10000);

        await logger.stop();
    } finally {

    }
}