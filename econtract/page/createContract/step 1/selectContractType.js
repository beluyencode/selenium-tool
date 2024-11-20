const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function selectContractType(driver) {
    try {
        const logger = new Logger('Select Contract Type');
        logger.start();

        // Chọn loại hợp đồng
        let selectContractType = await driver.findElement(By.css('#contract-type-input'));

        selectContractType.click();

        // Tìm kiếm loại hợp đồng
        selectContractType.sendKeys(config.econtract.create_contract.contractType); 

        // Chờ hiển thị danh sách loại hợp đồng

        // Chọn loại hợp đồng
        await retry(driver);

        await logger.stop();
    } finally {

    }
}

let count = 0;

async function retry(driver) {
    try {
        if (count !== 0) {
            await driver.sleep(1000);
        }

        let contractType =  await driver.wait(until.elementLocated(By.xpath(`//a[contains(., '${config.econtract.create_contract.contractType}')]`)), config.timeout || 10000);
        
        await contractType.click();
    } catch {
        count++;
        if (count < 5) {
            retry(driver);
        }
    }
}

