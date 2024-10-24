import { Page, Locator } from 'playwright'; 

export class LoginPage {
    page: Page;
    username_inputbox: Locator;
    password_inputbox: Locator;
    login_Btn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_inputbox = page.getByLabel('Username');
        this.password_inputbox = page.getByLabel('Password');
        this.login_Btn = page.getByRole('button', { name: 'Login' });
    }

    async goToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login'); 
    }

    async login(username: string, password: string): Promise<void> {
        await this.username_inputbox.fill(username);
        await this.password_inputbox.fill(password);
        await this.login_Btn.click();
    }
}
