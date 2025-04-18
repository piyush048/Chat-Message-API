# Messaging API

A simple, secure, and scalable messaging API built with **Express.js**, **TypeScript**, **MongoDB**, and **Winston Logger**. Features authentication, input validation, rate limiting, and proper project structure.

---

## 📂 Project Structure

```
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── main.ts
├── dist/ (compiled JS files)
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB instance

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Move into the project directory
cd messaging-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file at the root with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Project

```bash
# Development Mode
npm run dev

# Build the project
npm run build

# Start in Production Mode
npm start
```

---

## 📚 Tech Stack

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & bcrypt
- **Validation**: Joi
- **Rate Limiting**: express-rate-limit
- **Logging**: Winston + winston-daily-rotate-file
- **Environment Variables**: dotenv

---

## 📖 Features

- Secure Authentication (Signup/Login) with JWT
- Input validation using Joi
- Rate limiting to protect from abuse
- Proper error handling middleware
- Logger with daily file rotation
- Scalable project structure

---

## 🛠 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run server in development with live reload |
| `npm run build` | Compile TypeScript into JavaScript |
| `npm start` | Run server in production mode |

---

## 🧹 Linting & Formatting

> (Not added yet) You can integrate ESLint + Prettier for clean code.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## ✨ Author

Made with ❤️ by [Your Name Here]

---

## 📬 Contact

> Feel free to reach out if you need help or have questions!

