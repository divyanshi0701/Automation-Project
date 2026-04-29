class LoginPage {
    constructor(page){
        this.page= page;

        //Locators
        this.username = "#user-name";
        this.password = "#password";
        this.loginButton = "#login-button";
        this.errorMessage = ".error-message-container";
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username,password){
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage(){
        return await this.page.textContent(this.errorMessage);
    }
}

module.exports = LoginPage;