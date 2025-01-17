module.exports = async function driveBuild(callback) {
    const { Builder } = require('selenium-webdriver');
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    try {
        await callback(driver);
    } catch (e) {
        console.error(e);
        throw e;
    } finally {
        await driver.quit();
    }
}   