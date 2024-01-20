# README for Express-Oumla Application

This README file provides information about the Express-Oumla application, a Node.js application utilizing Express and the Oumla SDK for managing cryptocurrency profiles, wallets, and transactions.

## Overview

The Express-Oumla application is designed to interact with the Oumla API, allowing users to perform various cryptocurrency operations like creating profiles, wallets, generating addresses, and viewing transactions. It's structured as an Express.js application and leverages the Oumla SDK to facilitate these operations.

## Prerequisites

Before running this application, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation

To set up the Express-Oumla application on your local machine, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/BDR-Pro/Make-My-Chain
   ```

2. **Navigate to the Directory:**
   ```sh
   cd /Make-My-Chain
   ```

3. **Install Dependencies:**
   ```sh
   npm install
   ```

4. **Environment Variables:**
   - Change the name of `template.env` to `.env` file in the root directory.
   - Edit the following variable:
     ```env
     Oumla_API_KEY=your_oumla_api_key
     ```

## Running the Application

To run the application, execute the following command in the terminal:

```sh
npm start
```

The server will start, and you should see a message indicating that it's listening on the specified port.

## API Endpoints

The application provides several endpoints:

1. **Home (`/`):**
   - Method: GET
   - Description: Provides instruction to use the `/status` endpoint.

2. **Status (`/status`):**
   - Method: GET
   - Description: Returns the status of the server.

3. **Create Profile (`/create-profile`):**
   - Method: GET
   - Query Parameters: `type`, `reference`
   - Description: Creates a new user profile.

4. **Get Wallets (`/get-wallets`):**
   - Method: GET
   - Query Parameters: `network`, `reference`
   - Description: Retrieves wallets associated with a reference.

5. **Get Transactions (`/get-transactions`):**
   - Method: GET
   - Query Parameters: `reference`
   - Description: Retrieves transactions for a given reference.

6. **Create Wallet (`/createWallet`):**
   - Method: GET
   - Query Parameters: `network`, `reference`
   - Description: Generates a new wallet.

7. **Generate Address (`/generateAddress`):**
   - Method: GET
   - Query Parameters: `network`, `reference`
   - Description: Generates a new address.

8. **Get Address (`/getAddress`):**
   - Method: GET
   - Query Parameters: `reference`
   - Description: Retrieves addresses associated with a reference.

## Error Handling

The application includes basic error handling for missing parameters and unsuccessful requests.

## Contributing

Contributions to the Express-Oumla application are welcome. Please follow the standard GitHub pull request process to propose changes.

## License

MIT License
