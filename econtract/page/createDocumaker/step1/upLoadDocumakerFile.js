const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function upLoadDocumakerFile(driver) {
    try {
        const logger = new Logger('Up Load Documaker File ' + config.econtract.files.filePDFBlank);
        logger.start();

        // Tìm btn đẩy file Documaker
        let btnUploadDocumakerFile = await driver.findElement(By.xpath("//span[contains(.,'Upload contract file')]"));

        // Click button Documaker
        await btnUploadDocumakerFile.click();

        //????
        // Upload file bằng cách gửi đường dẫn file tới element input
        await fileInput.sendKeys(config.econtract.files.fileDocxDocumaker);

        await driver.wait(until.elementLocated(
            By.css("#file-infor-loaded")),
            config.timeout || 10000
        );

        await logger.stop();
    } finally {

    }
}