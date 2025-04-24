# Test Automation Engineer Code Challenge

## Overview

This project contains automated end-to-end tests for selected features of [The Internet](https://the-internet.herokuapp.com/), implemented using **Playwright** with **JavaScript** and the **Page Object Model (POM)**.  
All tests are designed to be **readable, maintainable, scalable** .

---

## Features Automated

- **Login**  
  - Tests successful login, failed login, empty credentials, and edge cases.
- **Dynamic Controls**  
  - Tests removing/adding the checkbox and enabling/disabling the input field.
- **JavaScript Alerts**  
  - Tests handling of alert, confirm (accept/dismiss), and prompt dialogs.

---

## Project Structure:

- **pages/**: Page Object Model classes for each feature
- **tests/**: Test specifications for each feature
- **Dockerfile**: Configuration to run tests in a container
- **playwright.config.js**: Playwright configuration (including reporting)
- **package.json**: Project dependencies and scripts

---

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) installed  

---

## How to Run the Tests

### 1. **Build the Docker Image**
```bash
docker build -t playwright-tests .
```

### 2. **Run All Tests**
```bash
docker run --rm playwright-tests
```

### 3. **Run Tests and Export HTML Report to Host**

To save and view the HTML report on your local machine, mount a folder from your host into the container.
Use the command that matches your operating system:

Windows (PowerShell):

```bash
docker run --rm -v "${PWD}/html-report:/app/html-report" playwright-tests
```

Mac/Linux:

```bash
docker run --rm -v "$(pwd)/html-report:/app/html-report" playwright-tests
```

You can view the HTML report using Playwright's built-in report server:

```bash
npx playwright show-report html-report
```
---

## Test Reporting

- **HTML reports** are generated automatically after each run.
- Reports are saved in the `html-report` directory.

---

## Implementation Details

- **Page Object Model**: Each page/feature has its own class encapsulating selectors and actions.
- **Test Design**: Tests are modular, easy to extend, and include both positive and negative scenarios.
- **Reporting**: HTML test reports are provided for easy review.

---





