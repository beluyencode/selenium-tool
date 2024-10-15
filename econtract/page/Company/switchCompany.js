const config = require('../../../helper/config');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addCompany(driver) {
    try {
        const logger = new Logger('Switch company');
        logger.start();
        // refresh page
        await driver.navigate().refresh();

        // Tìm button change company
        let companiesButton = await driver.wait(until.elementLocated(
            By.css("div.o_switch_company_menu")),
            10000
        );

        // Click vào button change company
        await companiesButton.click();

        // Tìm button chọn company
        let chooseCompaniesButton = await driver.wait(until.elementLocated(
            By.css(`div[aria-label='Switch to ${config.econtract.company.name}']`)),
            10000
        );

        // Click vào button chọn company
        await chooseCompaniesButton.click();

        await driver.wait(until.elementLocated(
            By.xpath(`//div[contains(@class, 'o_switch_company_menu')]//span[text()='${config.econtract.company.name}']`)),
            10000
        );

        logger.stop();
    } finally {

    }
}