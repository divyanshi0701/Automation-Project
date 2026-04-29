const {test,expect} = require('../fixtures.js/baseTest');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CartPage = require('../pages/CartPage');


const users = require('../test-data/users.json');

test('Complete Purchase Flow', async({
    loginPage ,
    inventoryPage ,
    cartPage ,
    checkoutPage    
}) => {

    const user = users.validUser;

    //Login
    await loginPage.goto();
    await loginPage.login(user.username,user.password);

    //Add item to cart
    await inventoryPage.addItemToCart();

    //Go to cart
    await inventoryPage.goToCart();

    //Checkout
    await cartPage.clickCheckout();


    //Fill details
    await checkoutPage.fillDetails('Divyanshi','Srivastava','400701');


    //Complete Checkout
    await checkoutPage.continue();
    await checkoutPage.finish();
    
    //Validate Success Message
    const successMessage = await checkoutPage.getSuccessMessage();
    await expect(successMessage).toContain('Thank you for your order');
});