
# Address Book Angular Application

## Overview

This Angular application interacts with a .NET API to manage addresses. It allows users to create new addresses and fetch existing addresses using their ID. The project demonstrates component-based architecture, state management with NgRx, and responsive design.

## Features

- **Address Form**
  - Input validation (required fields, max/min length)
  - Submit address data to the backend API
  - Loading spinner during submission

- **Address Search**
  - Enter an address ID to fetch address details
  - Display address details in a separate component

- **Address Detail**
  - Display detailed address information

- **State Management**
  - Manage address state with NgRx
  - Actions, reducers, effects, and selectors for address operations

- **Notifications**
  - Use Angular Material’s MatSnackBar for success/error notifications

## Installation

### Prerequisites

- Node.js and npm
- Angular CLI
- .NET 8.0 (for the provided API)

### Setup

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Run the Angular Application**

    ```bash
    ng serve
    ```

3. **Run the .NET Backend**

    Ensure the .NET backend is running on `http://localhost:5062`.

    ```bash
    cd path/to/dotnet/project
    dotnet run
    ```

## Usage

- Navigate to `http://localhost:4200` in your web browser.
- Use the **Address Form** to create a new address.
- Use the **Address Search** to fetch and display an address by its ID.

## Potential Enhancements

- **UI/UX**: Improve validation feedback, responsive design, styling consistency and use routing/modals.
- **Code Quality**: Add unit tests, improve error handling, enhance documentation, add code comments, and stricter typing.
- **Features**: Support multiple languages, implement an advanced notification system, and allow user profile management.
