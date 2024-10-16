# Financial-Dashboard

This repo contains a full-stack application that displays account balances. It is built using a `Spring Boot` backend for handling the API and a `React` frontend for displaying the account information.

Project Link:
Backend: https://financial-dashboard-backend-production.up.railway.app/
Frontend: https://dainty-snickerdoodle-11fbac.netlify.app/

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [1. Backend (Spring Boot)](#1-backend-spring-boot)
- [2. Frontend (React)](#2-frontend-react)

## Project Structure

```
Financial-Dashboard
├── react-frontend                    # React Frontend App
│   └── src/                          # Frontend source code
├── react-backend                     # Spring Boot Backend App
│   └── src/                          # Backend Source Code
│       └── main/java                 # Java files for Spring Boot
|       └── resources/balances.json   # Mock Data for balances
└── README.md
```

## Features

- Backend:
  - `/balances` endpoint to fetch account balance data
  - Mock balance data stored in `balances.json`
- Frontend:
  - Account balance component that fetches and displays account balances
  - Clean UI with a list of accounts and their balances

## Technologies

- Backend:
  - Spring Boot
  - Spring Web (for RESTful services)
- Frontend:
  - React.js

## Setup Instructions

#### Prerequisites

- Java (JDK 8 or higher) installed
- Maven installed for Java dependency management
- Node.js (v14 or higher) and npm (or yarn)
- Financial-Dashboard repository cloned:

```bash
git clone https://github.com/your-username/financial-dashboard.git
```

#### #1 Backend (Spring Boot)

1. Install dependencies and build the project:

```bash
mvn clean install
```

2. Run the Spring Boot app:

```bash
mvn spring-boot:run
```

3. The backend will run on `http://localhost:8080`. To use the API:

```
Get All Account Balances
URL: /balances
Method: GET
Description: Fetches all account balances from the balances.json file.
```

#### #2 Frontend (React)

1. Install the dependencies:

```bash
npm install
```

2. Start the React server:

```bash
npm run dev
```

3. The React app will run on `http://localhost:5173`. The app can be accessed on your browser.
