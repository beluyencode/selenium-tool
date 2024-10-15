const loginAdminUser = require('./page/Helper/loginAdminUser');
const addCompany = require('./page/Company/addCompany');
const switchCompany = require('./page/Company/switchCompany');
const addAdminUser = require('./page/User/addAdminUser');
const addPlan = require('./page/Company/addPlan');
const addPlanToCompany = require('./page/Company/addPlanToCompany');
const addUser = require('./page/User/addUser')
const config = require('../helper/config');
const goToDashBoard = require('./page/DashBoard/GoToDashBoard');
const clickBtnCreateContract = require('./page/DashBoard/ClickBtnCreateContract');
const uploadFile = require('./page/CreateContract/Step1/UploadFile');
const SelectContractType = require('./page/CreateContract/Step1/SelectContractType');

module.exports = async function run() {
    const {Builder} = require('selenium-webdriver');
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    try {
        await loginAdminUser(driver);
        // await addCompany(driver);
        // await switchCompany(driver);
        // await addAdminUser(driver);
        // await addPlan(driver);
        // await addPlanToCompany(driver);
        // for (let index = 0; index < config.econtract.listUser.length; index++) {
        //     const user = config.econtract.listUser[index];
        //     await addUser(driver, user)
        // }
        await goToDashBoard(driver);
        await clickBtnCreateContract(driver);
        await uploadFile(driver);
        await SelectContractType(driver);
    }catch(e) {
        throw e;
    } finally {
        // await driver.quit();
    }   
}   