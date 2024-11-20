const config = require('../../../../config.json');
const { By, until } = require('selenium-webdriver');
const Logger = require('../../../../helper/logger');
const continueStep = require('../step 1/continueStep');

module.exports = async function drapSignItem(driver) {
    try {
        const logger = new Logger("Drap Sign Item");
        logger.start();

        const listOr = Object.keys(config.econtract.create_contract.organization);

        for (const element of listOr) {
            const listSigners = config.econtract.create_contract.organization[element];

            const list = Object.keys(listSigners).reduce((prev, next) => {
                return [
                    ...prev,
                    ...listSigners[next]
                ]
            }, []);
            let index = 0;
            console.log(list);
            
            for (const signer of list) {
                const selects = await driver.findElement(By.xpath(`//div[contains(@class, "select_signer_sidebar")]//div[contains(@class, "select")]`));
                await selects.click();

                await driver.sleep(500);
                const listSelect = await selects.findElements(By.css(`.option:nth-child(${index + 1})`));   
                console.log(index);
                    
                await listSelect[0].click();
                console.log("click");
                
                const drap = await driver.findElement(By.xpath(`//div[@id="drap_signature_img"]`));
                const drop = await driver.findElement(By.xpath(`//div[@data-page-number="1"]`));
                // Lấy tọa độ của phần tử đích
                const actions = driver.actions({ async: true });

                // Click giữ (mouseDown) phần tử nguồn
                await actions.move({ origin: drap }).press().perform();

                // Kéo đến phần tử đích
                await actions.move({ origin: drop, x: 10  + (50 * (index + 1)), y: 50 }).perform()

                // Thả chuột (mouseUp)
                await actions.release().perform();
                index += 1;
            }
        }

        await continueStep(driver);
        
        await logger.stop();
    } finally {

    }
}