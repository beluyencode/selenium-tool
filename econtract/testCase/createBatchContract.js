const loginUser = require('../page/helper/loginUser');
const config = require('../../helper/config');
const driveBuild = require('../../helper/driveBuild');
const goToDashBoard = require('../page/dashboard/goToDashBoard');
const clickBtnCreateContract = require('../page/dashboard/clickBtnCreateContract');
const skipTourGuide = require('../page/dashboard/skipTourGuide');
const uploadFile = require('../page/createContract/step 1/uploadFile');
const uploadAttachmentFiles = require('../page/createContract/step 1/uploadAttachmentFiles');
const selectContractType = require('../page/createContract/step 1/selectContractType');
const inputContractNumber = require('../page/createContract/step 1/inputContractNumber');
const continueStep = require('../page/createContract/step 1/continueStep');
const createOrganization = require('../page/createContract/step 2/createOrganization');
const drapSignItem = require('../page/createContract/step 3/drapSignItem');
const clickBtnSendContract = require('../page/createContract/step 4/clickSendContractButton');
const clickBtnCreateBatchContract = require('../page/createBatchContract/step 1/clickBtnCreateBatchContract');
const clickBtnSelectContractTemple = require('../page/createBatchContract/step 1/clickBtnSelectContractTemple');
const clickBtnCreateTemplate = require('../page/createBatchContract/step 1/clickBtnCreateTemplate');
const clickBtnSaveContractTemplate = require('../page/createBatchContract/step 4/clickBtnSaveContractTemplate');

module.exports = async function initTestData() {
    await driveBuild(async (driver) => {
        await loginUser(driver, config.econtract.adminCompany);
        await goToDashBoard(driver);
        await skipTourGuide(driver);
        await clickBtnCreateContract(driver);
        await clickBtnCreateBatchContract(driver);
        await clickBtnSelectContractTemple(driver);
        await clickBtnCreateTemplate(driver);
        await uploadFile(driver);
        await selectContractType(driver);
        await uploadAttachmentFiles(driver);
        await inputContractNumber(driver);
        await continueStep(driver);
        await createOrganization(driver);
        await drapSignItem(driver);
        await clickBtnSaveContractTemplate(driver)
    });
}   