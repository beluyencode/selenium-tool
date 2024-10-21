const createContract = require('./testCase/createContract');
const initAllTestDataFlow = require('./testCase/initAllTestDataFlow');
const initTestData = require('./testCase/initTestData');
const initTestDataCompany = require('./testCase/initTestDataCompany');

module.exports = async function run() {
    await initTestData();
    // Promise.allSettled([
    //     initAllTestDataFlow()
    // ]).then((results) => {
    //     results.forEach((result, index) => {
    //         if (result.status === 'fulfilled') {
    //             // Xử lý những promise thành công
    //             console.log(`Test case ${index + 1} succeeded with result`);
    //         } else if (result.status === 'rejected') {
    //             // Xử lý những promise thất bại
    //             console.log(`Test case ${index + 1} failed with error`);
    //         }
    //     });
    // })
}
