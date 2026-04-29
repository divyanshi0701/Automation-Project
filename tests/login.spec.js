const { test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

//Import JSON
const users = require('../test-data/users.json');

test('Valid Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);

    const user = users.validUser;

    await loginPage.goto();
    await loginPage.login(user.username, user.password);
    await expect(page).toHaveURL(/inventory/);
    
});


test('Invalid login test', async({page}) => {
    const loginPage = new LoginPage(page);

    const user = users.invalidUser;

    await loginPage.goto();
    await loginPage.login('invalid_user','wronf_password');
    const error = await loginPage.getErrorMessage();

    await expect(error).toContain('Username and password do not match');
});