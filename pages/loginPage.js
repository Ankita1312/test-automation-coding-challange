export class LoginPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator('input#username');
      this.password = page.locator('input#password');
      this.submitButton = page.getByRole("button", { name: 'Login' });
      this.flashMessage = page.locator('#flash');
      this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }
  
    async login(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
      await this.submitButton.click();
    }
  
    async getFlashMessage() {
      return this.flashMessage.textContent();
    }
    async logout() {
        await this.logoutButton.click();
      }
  }
  
  