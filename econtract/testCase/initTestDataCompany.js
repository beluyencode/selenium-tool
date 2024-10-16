const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');
const loginUser = require('../page/helper/loginUser');
const addOrganization = require('../page/organization/addOrganization');

module.exports = async function initTestDataCompany() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.adminCompany);
        for (const organization of config.econtract.organizations) {
            await addOrganization(driver, organization);
        }
    });
}   