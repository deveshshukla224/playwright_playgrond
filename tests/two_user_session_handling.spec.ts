import {test,expect,BrowserContext,Page} from '@playwright/test'


test("Handling two user sessions in one go",async({browser})=>{

    //browser content 1 to handle first user session
    const browser_context_one:BrowserContext = await browser.newContext();
    //browser content 2 to handle second user session
    const browser_context_two:BrowserContext =await browser.newContext();
    
    //first browser context page to perform action
    const page1:Page = await browser_context_one.newPage();

    //second browser context page to perform action
    const page2:Page = await browser_context_two.newPage();



    //first user interactions

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    const email_id_field_1 =  page1.locator("#input-email");
    const password_field_1= page1.locator("#input-password");
    const login_btn_1= page1.locator("[value='Login']");
    
    await email_id_field_1.fill("onetest@mail.com");
    await password_field_1.fill("1111");
    await page1.pause();
    await login_btn_1.click()
    //await page1.pause();



    //second user interactions

    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    const email_id_field_2 =  page2.locator("#input-email");
    const password_field_2= page2.locator("#input-password");
    const login_btn_2= page2.locator("[value='Login']");
    
    await email_id_field_2.fill("twotest@mail.com");
    await password_field_2.fill("2222");
    await page1.pause();
    await login_btn_2.click()
    

    // await browser_context_one.close();
    // await browser_context_two.close();

});




// test('dummy test for one', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page).toHaveTitle(/Example/);
// });
