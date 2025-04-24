export class DynamicControlsPage {
    constructor(page) {
      this.page = page;
      this.checkbox = page.locator('#checkbox');
      this.addRemoveButton = page.locator('#checkbox-example button');
      this.input = page.locator('#input-example input');
      this.enableDisableButton = page.locator('#input-example button');
    }
  
    async removeCheckbox() {
      await this.addRemoveButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  
    async addCheckbox() {
      await this.addRemoveButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  
    async enableInput() {
      await this.enableDisableButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  
    async disableInput() {
      await this.enableDisableButton.click();
      await this.page.waitForLoadState('networkidle');
    }
  }
  