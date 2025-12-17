import {test} from '@playwright/test'


test("Handling authentication popup",async({page})=>{{
   
    const username = "admin";
    const password = "admin";

    
    //set extra http headers to handle authentication popup
    page.setExtraHTTPHeaders({
        'Authorization': createAuthenticationText(username,password)
    });

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    //verification after login
    //await page.waitForSelector("text=Congratulations!");

}});


function createAuthenticationText(username:any,password:any){
    //take username and password and convert it into base64 format
    const authText = 'Basic ' + btoa(username + ':' + password);
    return authText;
}