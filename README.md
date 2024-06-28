# MyFramework

MyFramework is a simple web framework designed to facilitate CRUD operations and AJAX-based interactions with a MongoDB database using Node.js and Express. It provides an easy-to-use structure for creating web applications with a clear separation of concerns between controllers, models, and views.

## Introduction

MyFramework is designed to provide a straightforward way to handle database operations and build web applications with a clear MVC (Model-View-Controller) structure. It simplifies database connections, uses AJAX for client-server communication, and offers a unique but easy-to-understand syntax.

## Features

- Simplified database connection using Mongoose.
- MC structure for organized code.
- AJAX-based interactions for dynamic data fetching and manipulation.
- CRUD operations: Create, Read, Update, Delete.

## Project Structure

```
myFramework/
├── node_modules/
├── public/
│   ├── addExample.html
│   ├── deleteExample.html
│   ├── exampleView.html
│   ├── listExamples.html
│   └── updateExample.html
├── src/
│   ├── controllers/
│   │   └── exampleController.js
│   ├── core/
│   │   ├── ajax.js
│   │   ├── db.js
│   │   └── framework.js
│   ├── models/
│   │   └── exampleModel.js
│   └── index.js
├── package.json
└── package-lock.json
```

## Requirements

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/myFramework.git
   cd myFramework
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Project

1. **Start MongoDB:**

   Ensure MongoDB is running. If it's installed locally, you can start it using:

   ```bash
   mongod
   ```

2. **Start the Express server:**

   ```bash
   node src/index.js
   ```

3. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`.

## Database Setup

1. **Create the data directory for MongoDB (if it doesn't exist):**

   ```bash
   mkdir -p /data/db
   ```

2. **Insert sample data:**

   Connect to the MongoDB shell and insert sample data:

   ```bash
   mongo
   use mydb
   db.examples.insertMany([
       { name: "Sample Data 1", value: 10 },
       { name: "Sample Data 2", value: 20 },
       { name: "Sample Data 3", value: 30 }
   ])
   ```

## API Endpoints

- **POST /api/data**: Add new example data.
- **GET /api/data**: Retrieve all example data.
- **DELETE /api/data/:id**: Delete example data by ID.
- **PUT /api/data/:id**: Update example data by ID.

## Usage

### Adding New Data

Navigate to `http://localhost:3000/addExample.html` and fill out the form to add new data to the database.

### Listing Data

Navigate to `http://localhost:3000/listExamples.html` to see a list of all examples stored in the database.

### Updating Data

Navigate to `http://localhost:3000/updateExample.html`, enter the ID of the data you wish to update, and provide the new values.

### Deleting Data

Navigate to `http://localhost:3000/deleteExample.html` and enter the ID of the data you wish to delete.

