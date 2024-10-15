const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');



module.exports = async function closeNotification(driver) {
    try {
        const logger = new Logger('Close notification');
        logger.start();

        let closeNotification = await driver.wait(until.elementLocated(
            By.css("button.o_notification_close.btn")),
            2000
        );

        await closeNotification.click();
        
        logger.stop();
    } finally {
        
    }
}
