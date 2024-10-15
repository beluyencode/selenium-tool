const loginUser = require('../page/helper/loginUser');
const addCompany = require('../page/company/addCompany');
const switchCompany = require('../page/company/switchCompany');
const addAdminUser = require('../page/user/addAdminUser');
const addPlan = require('../page/company/addPlan');
const addPlanToCompany = require('../page/company/addPlanToCompany');
const addUser = require('../page/user/addUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');

module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.admin);
        await addCompany(driver);
        await switchCompany(driver);
        await addAdminUser(driver);
        await addPlan(driver);
        await addPlanToCompany(driver);
        for (const element of config.econtract.listUser) {
            const user = element;
            await addUser(driver, user)
        }
    });
}   