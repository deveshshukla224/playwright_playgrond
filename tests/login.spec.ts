import {test, expect , Browser , Page} from '@playwright/test'
import {firefox,chromium,webkit} from '@playwright/test'


test("Login",async()=>{
    const browser:Browser = await webkit.launch({headless:false})
    //create browser instance
    const context = await browser.newContext();
    // create a context inside browser
    const page:Page = await context.newPage()
    //create page in context
    await page.goto("https://www.devslane.com")
    const title = await page.title()
    console.log("Captured title is : ",title)
    await expect(page).toHaveTitle("Hire Exceptional Software Engineers—Risk-Free!")
    
})


test("2nd method",async({page})=>{
    // directly use page fixture provided by playwright
    await page.goto("https://www.devslane.com");
    const title = await page.title()
    console.log("captured title from 2nd test is ",title)

})

