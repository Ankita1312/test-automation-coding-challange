// pages/homePage.js

export class HomePage {
    constructor(page) {
      this.page = page;
      // Locators for the three link for testing
      this.loginLink = page.locator('a[href="/login"]');
      this.dynamicControlsLink = page.locator('a[href="/dynamic_controls"]');
      this.javascriptAlertsLink = page.locator('a[href="/javascript_alerts"]');
    }
  
    async goto() {
      await this.page.goto('https://the-internet.herokuapp.com/');
    }
  
    async clicklogin() {
      await this.loginLink.click();
    }
  
    async clickDynamicControls() {
      await this.dynamicControlsLink.click();
    }
  
    async clickJavascriptAlerts() {
      await this.javascriptAlertsLink.click();
    }
  }
  
  