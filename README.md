# User Management API

This is a simple **RESTful API** built using **Node.js, Express.js, and MongoDB** that provides basic **CRUD** operations for managing users.

## 📌 Features
- Create, Read, Update, and Delete users.
- Proper error handling with meaningful responses.
- Input validation to prevent bad data.
- Structured project with controllers, models, routes, middleware, and error handling.

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Trynew19/Zylentrix-Task.git
cd ZYLENTRIX-TASK
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root directory and add:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### **4️⃣ Start the Server**
```sh
npm start
```

The server will run on **http://localhost:5000** by default.

---

## 📌 API Endpoints

### **1️⃣ Create a User**
**Endpoint:** `POST /api/users/register`
- **Body:**
  ```json
  {
    "name": "rishabh",
    "email": "rishabh2@gmail.com",
    "age": 25
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "data": {
        "name": "rishabh",
        "email": "rishabh2@gmail.com",
        "age": 25,
        "_id": "67ddb4b96098a00780eed118",
        "__v": 0
    }
  }
  ```

### **2️⃣ Get All Users**
**Endpoint:** `GET /api/users`
- **Response:**
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
        {
            "_id": "67ddafd116d21da50a7953a7",
            "name": "krishna",
            "email": "krishna2@gmail.com",
            "age": 20,
            "__v": 0
        },
        {
            "_id": "67ddb4b96098a00780eed118",
            "name": "rishabh",
            "email": "rishabh2@gmail.com",
            "age": 25,
            "__v": 0
        }
    ]
  }
  ```

### **3️⃣ Get Single User**
**Endpoint:** `GET /api/users/:id`
- **Response:**
  ```json
  {
    "success": true,
    "data": {
        "_id": "67ddafd116d21da50a7953a7",
        "name": "krishna",
        "email": "krishna2@gmail.com",
        "age": 20,
        "__v": 0
    }
  }
  ```

### **4️⃣ Update a User**
**Endpoint:** `PUT /api/users/:id`
- **Body:**
  ```json
  {
    "name": "kastoor jaiswal",
    "email": "kastoor1@gmail.com",
    "age": 22
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "data": {
        "_id": "67ddafd116d21da50a7953a7",
        "name": "kastoor jaiswal",
        "email": "kastoor1@gmail.com",
        "age": 22,
        "__v": 0
    }
  }
  ```

### **5️⃣ Delete a User**
**Endpoint:** `DELETE /api/users/:id`
- **Response:**
  ```json
  {
    "success": true,
    "message": "User deleted successfully"
  }
  ```

### **6️⃣ Handle Invalid API Endpoints**
**If the user hits a wrong endpoint, they receive:**
```json
{
  "success": false,
  "message": "You entered a wrong API endpoint: /api/invalid-endpoint"
}
```

---

## 📌 Error Handling Examples

### **1️⃣ Invalid Input (Missing Fields)**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

### **2️⃣ Invalid User ID**
```json
{
  "success": false,
  "message": "Invalid User ID"
}
```

### **3️⃣ Invalid MongoDB ID Format**
```json
{
  "success": false,
  "message": "Invalid ID format"
}
```

---

## 📌 Folder Structure
```
user-management-api/
│── controllers/
│   ├── userController.js
│── models/
│   ├── userModel.js
│── routes/
│   ├── userRoutes.js
│── middleware/
│   ├── errorHandler.js
│   ├── validateMiddleware.js
│
│── errors/
│   ├── errorHandler.js
│    
│── utils/
│   ├── connectDB.js
│── server.js
│── .env
│── .env.example
│── .gitignore
│── package.json
│── README.md
```

---



