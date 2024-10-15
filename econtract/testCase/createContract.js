const loginUser = require('../page/helper/loginUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');
const goToDashBoard = require('../page/dashboard/goToDashBoard');

module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.admin);
        await goToDashBoard(driver);
    });
}   