const loginUser = require('../page/helper/loginUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');
const goToDashBoard = require('../page/dashboard/goToDashBoard');
const clickBtnCreateContract = require('../page/dashboard/clickBtnCreateContract');
const skipTourGuide = require('../page/dashboard/skipTourGuide');
const clickBtnDocumaker = require('../page/createDocumaker/step1/clickBtnDocumaker');
const upLoadDocumakerFile = require('../page/createDocumaker/step1/upLoadDocumakerFile');


module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.adminCompany);
        await goToDashBoard(driver);
        await skipTourGuide(driver);
        await clickBtnCreateContract(driver);
        await clickBtnDocumaker(driver);
        await upLoadDocumakerFile(driver);
    });
}       