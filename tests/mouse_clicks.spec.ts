import {test,expect} from '@playwright/test';

test('Mouse click actions', async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    
    await page.waitForTimeout(2000);
    

    //double click 
    await page.getByText("Double-Click Me To See Alert").dblclick();
    await page.waitForTimeout(2000);

    //right click or context click
    await page.locator('text=right click me').click({button:'right'});
    await page.waitForTimeout(2000);

    //shift + click 

    await page.goto("http://the-internet.herokuapp.com/shifting_content")

    await page.getByText("Example 1: Menu Element").click({modifiers:['Shift']});
    await page.waitForTimeout(2000);

});