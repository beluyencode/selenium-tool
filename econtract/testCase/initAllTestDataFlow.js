const initTestData = require("./initTestData");
const initTestDataCompany = require("./initTestDataCompany");


module.exports = async function initAllTestDataFlow() {
    await initTestData();
    await new Promise(resolve => setTimeout(resolve, 90000));
    await initTestDataCompany();
}
