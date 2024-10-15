const config = require('../../../helper/config');
const {By, until} = require('selenium-webdriver');
const Logger = require('../../../helper/logger');

module.exports = async function addPlanToCompany(driver) {
    try {
        const logger = new Logger('Add plan to company');
        logger.start();

        // Tìm button settings
        let settings = await driver.findElement(By.xpath("//header//*[@title='More Menu']//span[text()='Settings']"));
        
        // Click vào button settings
        await settings.click();

        // Tìm button Companies
        let companiesButton = await driver.wait(until.elementLocated(
            By.xpath("//a[text()='Subscription']")),
            10000
        ); 

        // Click vào button Companies
        await companiesButton.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - Subscription'), 10000);

        // Tìm button Create
        let buttonElement =  await driver.wait(until.elementLocated(
            By.xpath("//div[@class='o_cp_buttons']//button[text()=' New ']")),
            10000
        );
       
        // Click vào button Create
        await buttonElement.click();

        // Chờ đến khi load trang xong
        await driver.wait(until.titleIs('Xmate Econtract - New'), 10000);

        // get Subscription Name
        let inputElement = await driver.findElement(By.css("input[placeholder='e.g SUB00001']"));
        
        let subscriptionName = await inputElement.getAttribute('value');

        // Tìm phần tử input có id là 'start_date'
        let startDate = await driver.findElement(By.css("input[id='start_date']"));

        // click vào input
        await startDate.click();

        // Tìm thẻ ngày hôm nay trong datepicker
        let today = await driver.wait(until.elementLocated(
            By.css("td.day.today")),
            10000
        );;

        // Click vào thẻ ngày hôm nay
        await today.click();

        // Tìm phần tử a có title="Select Time"
        let selectTime = await driver.findElement(By.css("a[title='Select Time']"));

        // click vào a
        await selectTime.click();

        // Tìm phần tử div chứa timepicker
        await driver.wait(until.elementLocated(
            By.xpath("//li[contains(@class, 'collapse') and contains(@class, 'show')]//div[contains(@class, 'timepicker')]")),
            10000
        );

        let incrementMinutes = await await driver.findElement(By.css("a[data-action='incrementMinutes']"));

        await incrementMinutes.click();

        // Tìm phần tử a có title='Close the picker'
        let saveDatepicker = await driver.findElement(By.css("a[title='Close the picker']"));

        // click vào a
        await saveDatepicker.click();

        // Tìm phần tử input có id là plan_id
        let selectPlan = await driver.findElement(By.css("input[id='plan_id']"));

        // click vào input
        await selectPlan.click();

        // Tìm thẻ <a> bên trong phần tử cùng cấp với văn bản 'aaaa'
        let plan =  await driver.wait(until.elementLocated(
            By.xpath(`//div[@name='plan_id']//a[text()='${config.econtract.plan.name}']`)),
            10000
        );
        
        // Click vào thẻ <a> tìm thấy
        await plan.click();

        // Tìm phần tử input có id là company_id
        let selectCompany = await driver.findElement(By.css("input[id='company_id']"));

        // click vào input
        await selectCompany.click();


        // Tìm thẻ <a> bên trong phần tử cùng cấp với văn bản 'aaaa'
        let company = await driver.wait(until.elementLocated(
            By.xpath(`//div[@name='company_id']//a[text()='${config.econtract.company.name}']`)),
            10000
        );;

        // Click vào thẻ <a> tìm thấy
        await company.click();

        // Tìm phần tử button với thuộc tính name='change_active_status'
        let saveButton = await driver.findElement(By.css("button[name='change_active_status']"));

        // Click vào button Save
        await saveButton.click();

        // Tìm confirm button
        let confirmButton = await driver.wait(until.elementLocated(
            By.xpath("//button[@class='btn btn-primary' and text()='Ok']")),
            10000
        );

        // Click vào confirm button
        await confirmButton.click();

        await driver.wait(until.titleIs('Xmate Econtract - ' + subscriptionName), 10000);

        logger.stop();
    } finally {
        
    }
}