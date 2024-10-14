// code mẫu
// import { WebDriver } from "selenium-webdriver";

// export default async function login(driver) {
//     try {
//         // Điều hướng đến trang đăng nhập
//         await driver.get('http://localhost:8069/web/login');

//         // Tìm trường username và nhập giá trị
//         await driver.findElement(By.id('login')).sendKeys('admin');

//         // Tìm trường password và nhập giá trị
//         await driver.findElement(By.id('password')).sendKeys('1');

//         // Gửi biểu mẫu đăng nhập
//         await driver.findElement(By.css('button[type="submit"]')).click();
        
//         // Kiểm tra URL hiện tại của trang
//         await driver.wait(until.urlContains('http://localhost:8069/web#action='), 10000);
        
//     } finally {
        
//     }
// }
