import {test,expect} from '@playwright/test';
//const path = require('path');

// test.only("Our first playwright test", async function login({page}){
//     await page.goto("https://www.saucedemo.com/");
//     await page.goto("https://www.amazon.com");
// })
test("Our first playwright test", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    //await page.pause();
    await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");

    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("1");
    await page.locator("//a[@class='shopping_cart_link']").click();
    await page.locator("//button[@id='checkout']").click();
    await page.locator("//input[@id='first-name']").fill("Chaithra");
    await page.locator("//input[@id='last-name']").fill("Shankara Narayana");
    await page.locator("//input[@id='postal-code']").fill("560110");
    await page.locator("//input[@id='continue']").click();
    await page.locator("//button[@id='finish']").click();
    await page.locator("//button[@id='back-to-products']").click();
})

test("Dropdown validation in saucedemo website", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);

    let dropdown = await page.locator("//select[@class='product_sort_container']");
    await dropdown.selectOption("lohi");
    await page.waitForTimeout(3000);
    await dropdown.selectOption("hilo");
    await page.waitForTimeout(3000);
    await dropdown.selectOption("az");
    await page.waitForTimeout(3000);
    await dropdown.selectOption("za");
    await page.waitForTimeout(3000);

    await expect(page.locator("//div[@class='inventory_item']")).toHaveCount(6);
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("1");
})

test("Navigation methods in playwright website", async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.locator("//a[@class='getStarted_Sjon']").click();
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
})

test("Login and logout of saucedemo website", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
    await expect(page.locator("//input[@placeholder='Password']")).toHaveValue("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await expect(page.locator("//a[@id='logout_sidebar_link']")).toHaveText("Logout");
    await page.locator("//a[@id='logout_sidebar_link']").click();
    await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
})

test("test run using browser fixture", async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    //await page.pause();
    await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");

    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("1");
    await page.locator("//a[@class='shopping_cart_link']").click();
    await page.locator("//button[@id='checkout']").click();
    await page.locator("//input[@id='first-name']").fill("Chaithra");
    await page.locator("//input[@id='last-name']").fill("Shankara Narayana");
    await page.locator("//input[@id='postal-code']").fill("560110");
    await page.locator("//input[@id='continue']").click();
    await page.locator("//button[@id='finish']").click();
    await page.locator("//button[@id='back-to-products']").click();
})

test('File Upload', async ({page})=>{
    //const filePath = path.join(__dirname, 'test-data', 'sample.txt');

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator("//input[@id='file-upload']").setInputFiles("test-data/sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);

// assertion
await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();
await expect(page.locator("h3")).toHaveText("File Uploaded!");
}
)

//visual testing

test('Visual Testing in instagram', async ({page})=>{
await page.goto('https://www.instagram.com/');
await expect(page).toHaveTitle("Instagram");
await page.waitForTimeout(3000);
//expect (await page.screenshot()).toMatchSnapshot('dummy.png');
//---failed image is saved in test-results folder, copy that name and add it as below.
//expect (await page.screenshot()).toMatchSnapshot('dummy-actual.png');
//---copy the failed screenshot and rename and keep it outside if that folder, within the framework
expect (await page.screenshot()).toMatchSnapshot("insta.png");

})
test("Visual testing in playwright page", async ({page})=>{
    await page.goto('https://playwright.dev/');
    //await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
    await page.waitForTimeout(3000);
    expect (await page.screenshot()).toMatchSnapshot("playwright.png");
})

//Handle alerts in playwright
test.only("Handle alerts in playwright", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     await page.waitForTimeout(5000);
    page.on('dialog', async dialog => {
        await dialog.accept();
      });
      await page.locator("//button[@onclick='jsAlert()']").click();
      await page.waitForTimeout(5000);
      await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert");
})
