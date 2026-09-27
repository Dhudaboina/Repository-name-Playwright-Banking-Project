class TransferPage {
    constructor(page) {
        this.page = page;

        this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
        this.amountInput = page.locator('#amount');
        this.fromAccount = page.locator('#fromAccountId');
        this.toAccount = page.locator('#toAccountId');
        this.transferButton = page.getByRole('button', { name: 'Transfer' });
    }

    async transferFunds(amount, fromAccount, toAccount) {
        await this.transferFundsLink.click();

        await this.amountInput.fill(amount);

        await this.fromAccount.selectOption(fromAccount);

        await this.toAccount.selectOption(toAccount);

        await this.transferButton.click();
    }
}

export { TransferPage };