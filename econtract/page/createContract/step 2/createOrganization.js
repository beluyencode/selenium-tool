const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');
const createSignerInOrganization = require('./createSignerInOrganization');
const continueStep = require('../step 1/continueStep');

module.exports = async function createOrganization(driver) {
    try {
        const logger = new Logger("Create Organization");
        logger.start();

        let addOrganization = await driver.wait(until.elementLocated(By.xpath("//div[@id='create-doc-container']/div[2]/div[4]/div/div[2]")), config.timeout || 10000);

        let listOrganizationJson = config.econtract.create_contract.organization;

        const listOr = Object.keys(listOrganizationJson);

        for (let i = 0; i < listOr.length; i++) {
            let findOrganization;

            try {
                findOrganization = await driver.findElement(By.xpath('//p[contains(.,"' + listOr[i] + '")]'));
            } catch (error) {
                findOrganization = null;
            }

            // if (findOrganization === null) {
            //     await addOrganization.click();

            //     let changeTab = await driver.wait(until.elementLocated(
            //         By.xpath("//div[@id='mate_chart_add_box']/div[3]/div/span[2]")),
            //         config.timeout || 10000
            //     );

            //     if (listOr[i] === "personal") {
            //         changeTab = await driver.wait(until.elementLocated(
            //             By.xpath("//div[@id='mate_chart_add_box']/div[3]/div/span[3]")),
            //             config.timeout || 10000
            //         );
            //     }
            //     await changeTab.click();

            //     let inputOrganization;

            //     if (listOr[i] === "personal") {
            //         inputOrganization = await driver.findElement(By.xpath('//input[@placeholder="Select personal..."]'))
            //     } else {
            //         inputOrganization = await driver.findElement(By.xpath('//input[@placeholder="Select organization..."]'))
            //     }
                
            //     await inputOrganization.sendKeys(listOr[i]);

            //     let findSelectOrganization = await driver.wait(until.elementLocated(
            //         By.xpath(`//a[contains(text(), '${listOr[i]}')]`)),
            //         config.timeout || 10000
            //     );
            //     await findSelectOrganization.click();

            //     let buttonAdd = await driver.findElement(By.xpath("//div[@id='mate_chart_add_box']/div[5]/button[2]"));
            //     await buttonAdd.click();
            // } else {
            //     await findOrganization.click();
            // }
            await findOrganization.click();

            await createSignerInOrganization(driver, listOrganizationJson[listOr[i]]);
            
            await continueStep(driver);
        }  

        await logger.stop();
    } finally {

    }
}