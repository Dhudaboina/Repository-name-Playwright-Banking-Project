# Playwright Banking Automation Project

## Project Overview

This project automates a demo banking application using Playwright with JavaScript.

The project covers UI automation, API testing, UI + API validation, advanced Playwright scenarios, reporting, debugging, and CI/CD.

## Application

ParaBank Demo Banking Application

## Technology Stack

- Playwright
- JavaScript
- Node.js
- REST API Testing
- Git
- GitHub
- GitHub Actions

## Automation Coverage

### UI Testing

- Banking login
- Fund transfer
- End-to-end banking flow
- Logout validation

### API Testing

- Account details API
- Customer account validation
- Fund transfer API
- HTTP status validation
- XML response validation

### UI + API Validation

The project performs a transaction through the UI and validates account information through the API.

### Advanced Playwright

- Explicit waits
- Browser dialogs
- Multiple tabs
- iFrames
- File upload
- File download
- Network interception
- API mocking
- API error simulation

## Framework Design

The project uses Page Object Model.

### Page Objects

- LoginPage
- TransferPage

### Test Data

Test data and environment configuration are separated from test logic.

## Reporting

Playwright HTML reporting is enabled.

The project also captures:

- Screenshots on failure
- Videos on failure
- Traces on retry

## CI/CD

GitHub Actions is configured to execute Playwright tests automatically.

## Root Cause Analysis

An RCA document is included to demonstrate debugging of a failed fund-transfer test.

## How to Run

Install dependencies:

```bash
npm install