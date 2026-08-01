import {test,expect} from '@playwright/test';

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

test("@smoke Login and logout of saucedemo website", async ({page})=>{
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
})