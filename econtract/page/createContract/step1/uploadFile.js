const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function upLoadFile(driver) {
    try {
        const logger = new Logger('Up Load File ' + config.econtract.files.filePDFBlank);
        logger.start();

        // Tìm input type="file" trên trang
        let fileInput = await driver.findElement(By.css('input[id="import-file"]'));

        // Upload file bằng cách gửi đường dẫn file tới element input
        await fileInput.sendKeys(config.econtract.files.filePDFBlank);

        await driver.wait(until.elementLocated(
            By.css("#file-infor-loaded")),
            config.timeout || 10000
        );



        await logger.stop();
    } finally {

    }
}