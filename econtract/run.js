const login = require('./page/login');
const addCompany = require('./page/addCompany');
const switchCompany = require('./page/switchCompany');
const addAdminUser = require('./page/addAdminUser');
const addPlan = require('./page/addPlan');
const addPlanToCompany = require('./page/addPlanToCompany');
const addUser = require('./page/addUser')
const config = require('../helper/config');


module.exports = async function run() {
    const {Builder} = require('selenium-webdriver');
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    try {
        await login(driver);
        // await addCompany(driver);
        await switchCompany(driver);
        // await addAdminUser(driver);
        // await addPlan(driver);
        // await addPlanToCompany(driver);
        for (let index = 0; index < config.econtract.listUser.length; index++) {
            const user = config.econtract.listUser[index];
            await addUser(driver, user)
        }
    }catch(e) {
        throw e;
    } finally {
        await driver.quit();
    }   
}   