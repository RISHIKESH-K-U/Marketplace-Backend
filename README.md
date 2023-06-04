# Marketplace - Backend

This is the backend server for the Online Marketplace application. It provides API endpoints for retrieving items, placing bids, adding new items, and deleting items from the marketplace.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/online-marketplace-backend.git`
2. Navigate to the project directory: `cd online-marketplace-backend`
3. Install dependencies: `npm install`

## Configuration

1. Open the `index.js` file in a text editor.
2. Replace `"***"` in the `db` configuration with your database name, username, and password.

## Usage

1. Start the server: `npm start`
2. The server will be running on `http://localhost:3002`

## API Endpoints

### GET /home

Retrieves all items from the marketplace.

### POST /bid

Places a bid on an item.

### POST /new

Adds a new item to the marketplace.

### POST /delete

Deletes an item from the marketplace.

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- MySQL: Open-source relational database management system.
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.js.


