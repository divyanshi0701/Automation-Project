class CheckoutPage {
    constructor(page){
        this.page = page;

        //Locators
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zipCode = '#postal-code';
        this.cancelButton = '#cancel';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';

    }

    async fillDetails(fname, lname, zip){
        await this.page.fill(this.firstName, fname);
        await this.page.fill(this.lastName, lname);
        await this.page.fill(this.zipCode, zip);

    }

    async continue(){
        await this.page.click(this.continueButton);
    }

    async finish(){
        await this.page.click(this.finishButton);
    }

    async getSuccessMessage(){
        return await this.page.textContent(this.successMessage);
    }
}

module.exports = CheckoutPage;