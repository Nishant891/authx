# 🔐 AuthX : JWT Authentication & Authorization with 2FA  

[🎥 Demo on Loom](https://www.loom.com/share/9fd1e498fadf44daa73dcc3c2ef72fde)  

# Description

Complete JWT based OAuth system with client, server components and OTP verification using Resend and MongoDB as database.

This project implements a **JWT-based authentication and authorization system** with built-in **Two-Factor Authentication (2FA)** support.  

## ✨ Features  
- Secure login and signup with JWT tokens  
- Role-based authorization (e.g., user, admin)  
- Two-Factor Authentication (2FA) via TOTP (Google Authenticator, Authy, etc.)  
- Token refresh and expiration handling  
- Built with scalability and security best practices  


## Installation

```bash
npm install authx

## Quick Setup

## 1. Copy the environment template

```bash
cp node_modules/authx/.env.example .env
```

Then fill in your environment variables in `.env`.

## 2. For the Client (Next.js)

Copy the client code to your project or use it as reference:

```bash
cp -r node_modules/authx/client/* ./
```

## 3. For the Server (Express)

Copy the server code to your project or use it as reference:

```bash
cp -r node_modules/authx/server/* ./
```


