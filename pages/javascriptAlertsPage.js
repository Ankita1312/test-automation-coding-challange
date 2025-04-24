// pages/javascriptAlertsPage.js

export class JavaScriptAlertsPage {
    constructor(page) {
      this.page = page;
      this.alertButton = page.locator('button[onclick="jsAlert()"]');
      this.confirmButton = page.locator('button[onclick="jsConfirm()"]');
      this.promptButton = page.locator('button[onclick="jsPrompt()"]');
      this.resultText = page.locator('#result');
    }
  
    async triggerAlert() {
      await this.page.once('dialog', dialog => dialog.accept());
      await this.alertButton.click();
    }
  
    async acceptConfirm() {
      await this.page.once('dialog', dialog => dialog.accept());
      await this.confirmButton.click();
    }
  
    async dismissConfirm() {
      await this.page.once('dialog', dialog => dialog.dismiss());
      await this.confirmButton.click();
    }
  
    async acceptPrompt(text) {
      await this.page.once('dialog', dialog => dialog.accept(text));
      await this.promptButton.click();
    }
  
    async dismissPrompt() {
      await this.page.once('dialog', dialog => dialog.dismiss());
      await this.promptButton.click();
    }
  }
  