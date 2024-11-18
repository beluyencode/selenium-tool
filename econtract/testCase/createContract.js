const loginUser = require('../page/helper/loginUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');
const goToDashBoard = require('../page/dashboard/goToDashBoard');
const clickBtnCreateContract = require('../page/dashboard/clickBtnCreateContract');
const skipTourGuide = require('../page/dashboard/skipTourGuide');
const uploadFile = require('../page/createContract/step 1/uploadFile');
const uploadAttachmentFiles = require('../page/createContract/step 1/uploadAttachmentFiles');
const selectContractType = require('../page/createContract/step 1/selectContractType');

module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.admin);
        await goToDashBoard(driver);
        await skipTourGuide(driver);
        await clickBtnCreateContract(driver);
        await uploadFile(driver);
        await selectContractType(driver);
        await uploadAttachmentFiles(driver);
    });
}   