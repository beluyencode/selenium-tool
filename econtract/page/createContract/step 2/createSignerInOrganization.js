const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');

let count = 0;

module.exports = async function createSignerInOrganization(driver, signers) {
    try {
        const logger = new Logger("Create Signer In Organization");
        logger.start();
        const listRole = Object.keys(signers);

        const listRoleMap = listRole.reduce((prev, next) => {
            return [
                ...prev,
                ...signers[next].map(() => next)
            ]
        }, []);    

        let addSigner = await driver.wait(until.elementLocated(
            By.xpath('//div[contains(@class, "choose-organization-div") and not(contains(@class, "d-none"))]//button[contains(., "Add recipient")]')),
            config.timeout || 10000
        );
        const listUserInOr = listRole.reduce((prev, next) => {
            return [
                ...prev,
                ...signers[next]
            ]
        }, []);

        for (let index = 0; index < listUserInOr.length - 1; index++) {
            await addSigner.click();
        }

        let divSigner = await driver.findElements(By.xpath('//div[contains(@class, "choose-organization-div") and not(contains(@class, "d-none"))]//div[contains(@class, "container_sortable_data")]'));
      
        let child = await divSigner[0].findElements(By.xpath('.//div[contains(@class, "setting-content-container")]'));

        for (let index = 0; index < child.length; index++) {
            count = 0;
            const input = await child[index].findElement(By.xpath('.//input[@placeholder="Full name"]'));
            
            await input.sendKeys(listUserInOr[index]);
            await retry(driver, input, listUserInOr[index], index);

            const roleList = await child[index].findElement(By.xpath('.//div[contains(@class, "select_div_common ")]'));

            await roleList.click();

            await driver.sleep(1000);

            const role = await roleList.findElement(By.xpath(`.//p[contains(@class, "option_title") and contains(., "${listRoleMap[index]}")]`));

            await role.click();
        }
        
     
        await logger.stop();
    } finally {

    }
}

async function retry(driver, input, name) {
    try {
        if (count !== 0) {
            await driver.sleep(1000);
        }

        let signer =  await driver.wait(until.elementLocated(By.xpath(`//a[contains(., '${name}')]`)), config.timeout || 10000);
        
        await signer.click();

    } catch {
        count++;
        if (count < 5) {
            retry(driver);
        }
    }
}