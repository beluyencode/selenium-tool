const modules = require('./testCase/testCase');
const config = require('../helper/config');

module.exports = async function run() {
    Promise.allSettled(config.testCases.map(testCase => modules[testCase]())).then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                // Xử lý những promise thành công
                console.log(`Test case ${index + 1} succeeded with result`);
            } else if (result.status === 'rejected') {
                // Xử lý những promise thất bại
                console.log(`Test case ${index + 1} failed with error`);
            }
        });
    })
}
