# 🔐 Web3 Nonce-Based Authentication Login

This project implements a secure passwordless Web3 authentication system using MetaMask wallet signature verification. Users authenticate by signing a nonce instead of using traditional passwords.

---

## Features

- MetaMask wallet authentication
- Nonce-based signature verification
- Passwordless Web3 login
- Modern glassmorphism frontend UI
- Secure backend verification using Ethers.js
- CORS-enabled API

---

## Tech Stack

Frontend:
- HTML5
- CSS3
- JavaScript (ES6)
- Ethers.js v6
- MetaMask

Backend:
- Node.js
- Express.js
- Ethers.js
- CORS

---

## Project Structure

web3-auth/
├── frontend/
│   └── index.html
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── README.md

---

## Authentication Flow

1. User clicks Login with MetaMask
2. Frontend requests a nonce from backend
3. User signs the nonce using MetaMask
4. Signature is sent to backend
5. Backend verifies the wallet address
6. Login is successful if verification passes

---

## Backend Setup

cd backend  
npm install  
npm start  

Backend runs at:
http://localhost:3000

---

## API Endpoints

POST /nonce  
Request body:
{ "address": "0x..." }

POST /verify  
Request body:
{ "address": "0x...", "signature": "0x..." }

---

## Frontend Usage

1. Open index.html in a browser
2. Install MetaMask extension
3. Click Couple MetaMask / Login
4. Sign the message
5. Wallet address appears after successful login

---

## Security Notes

- Uses nonce to prevent replay attacks
- No passwords stored
- Nonces stored in memory (demo purpose)

For production:
- Use database storage
- Add nonce expiration
- Enable HTTPS
- Implement session or JWT

---

## License

ISC License

---

## Author

PIRUTHIVIRAJ M  

