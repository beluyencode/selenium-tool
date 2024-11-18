const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

module.exports = async function uploadMultipleAttachments(driver, attachmentFiles) {
    try {
        const logger = new Logger('Upload Multiple Attachments');
        logger.start();

        // Bước 1: Nhấn vào nút mở phần đẩy file đính kèm
        let attachmentButton = await driver.findElement(
            By.xpath('//button[contains(@class, "attachment-collapse") and contains(@class, "button-collapse")]'),
            config.timeout || 10000
        );
        await attachmentButton.click();

        // Chờ phần giao diện tải file đính kèm xuất hiện
        await driver.wait(
            until.elementLocated(By.css('#attachment-upload-section')),
            config.timeout || 10000
        );

        logger.info('Phần đẩy file đính kèm đã được mở thành công!');

        // Bước 2: Đẩy nhiều file lên nếu input hỗ trợ thuộc tính "multiple"
        let attachmentInput = await driver.findElement(By.css('input[id="attachment-upload"]'));

        // Ghép các đường dẫn file thành một chuỗi, phân cách bằng "\n" hoặc ","
        let filesToUpload = attachmentFiles.join('\n'); // "\n" cho Windows, "," cho Unix
        await attachmentInput.sendKeys(filesToUpload);

        // Chờ xác nhận từng file được tải lên
        for (let filePath of attachmentFiles) {
            let fileName = filePath.split('/').pop();
            await driver.wait(
                until.elementLocated(By.xpath(`//div[contains(text(), '${fileName}')]`)),
                config.timeout || 10000
            );
            logger.info(`File "${fileName}" đã được tải lên thành công!`);
        }

        logger.info('Tất cả file đính kèm đã được tải lên thành công!');
        await logger.stop();
    } catch (error) {
        console.error('Lỗi khi tải nhiều file đính kèm:', error);
    }
};
