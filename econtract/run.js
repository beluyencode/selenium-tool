const login = require('./page/login');
const addCompany = require('./page/addCompany');
const switchCompany = require('./page/switchCompany');
const addAdminUser = require('./page/addAdminUser');
const addPlan = require('./page/addPlan');
const addPlanToCompany = require('./page/addPlanToCompany');




module.exports = async function run() {
    const {Builder} = require('selenium-webdriver');
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    try {
        await login(driver);
        await addCompany(driver);
        await switchCompany(driver);
        await addAdminUser(driver);
        await addPlan(driver);
        await addPlanToCompany(driver);
    }catch(e) {
        throw e;
    } finally {
        await driver.quit();
    }   
}