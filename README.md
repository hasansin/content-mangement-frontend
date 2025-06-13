# 🎨 Contact Management Frontend (React + Redux)

This is the **frontend application** for the Contact Management System. It is built using **React**, styled with **Tailwind CSS**, and uses **Redux Toolkit** for state management. The frontend interacts with a NestJS backend to manage contacts, including creating, editing, deleting, and viewing.

---

## 🚀 Features

- 🔐 User authentication (login, logout)
- 📝 Create, edit, delete contacts
- 🔍 Search and filter contacts
- 📊 Sort and paginate contacts
- 🎨 Responsive and modern UI
- 🧠 State management with Redux Toolkit
- ✅ Form validation and error handling
- 🔁 Integrated with backend API (NestJS)

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/c6c50fbc-f4c6-4795-9463-a68a29fbeb5e)
![image](https://github.com/user-attachments/assets/0e3d5842-d711-4cab-8897-c75e9a8f2d94)
![image](https://github.com/user-attachments/assets/651856fa-bef7-451d-b73b-8f8ab92e2b33)

---

## 🧰 Tech Stack

- React
- Redux Toolkit
- Tailwind CSS
- React Icons
- React Router DOM
- React Toastify
- Axios

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/contact-management-frontend.git
cd contact-management-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File

```bash
cp .env.example .env
```

### 🔐 Example .env

```bash
REACT_APP_API_BASE_URL=http://localhost:3000
```

### 4️⃣ Start the App
```
npm run start
```

### 5️⃣ Setup the App with docker


## 🧰 Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop) & Docker Compose
- clone both frontend and contact management backend (NestJS) in single folder

#### 🧪 Build and Start All Services

```bash
docker-compose up --build
```

> 📦 This will:
> - Start the NestJS backend on [http://localhost:3000](http://localhost:3000)
> - Start PostgreSQL on port `5432`
> - Start the react frontend on [http://localhost:3001](http://localhost:3001)

#### ⛔️ To Stop Containers

```bash
docker-compose down -v
```

---

### 🔗 API Integration
The frontend communicates with the backend REST API. You must set the correct REACT_APP_API_BASE_URL to your NestJS server URL.
Example API Endpoints:
```bash
  POST /auth/login – Login
  POST /auth/register – Register
  GET /contacts – Get all contacts
  POST /contacts – Add new contact
  PUT /contacts/:id – Update contact
  DELETE /contacts/:id – Delete contact
```
  
All contact-related endpoints require a JWT token from login.

### 📁 Project Structure

```bash
  src/
  │
  ├── components/        # Reusable UI components (ContactList, Modal, etc.)
  ├── pages/             # Main views (e.g., Login, Contacts)
  ├── redux/             
  │   ├── actions/       # Async thunks (API calls)
  │   ├── reducers/      # Redux slices (auth, contacts)
  │   └── store.js       # Redux store configuration
  ├── App.js             # Main application entry point
  ├── index.js           # Renders the app
  └── assets/            # Static assets (images, logos, etc.)
```


### 🔗 Related Projects
📦 Contact Management Backend (NestJS) - https://github.com/hasansin/contact-management-backend.git




