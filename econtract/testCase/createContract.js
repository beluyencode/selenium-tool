const loginUser = require('../page/helper/loginUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');

module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.admin);
    });
}   