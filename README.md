# Aravind Garapati — Portfolio

A personal portfolio website built with **React 18 + Vite + Tailwind CSS** (frontend) and **FastAPI** (backend).

## Project Structure

```
├── frontend/          # React single-page application
│   ├── src/
│   │   ├── components/  # Navbar, Hero, About, Projects, Contact, Footer
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── backend/           # FastAPI REST API
│   ├── main.py
│   └── requirements.txt
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app starts on **http://localhost:5173**.

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API starts on **http://localhost:8000**.

## API Endpoints

| Method | Endpoint       | Description                          |
|--------|---------------|--------------------------------------|
| GET    | `/api/health` | Health check — returns `{"status": "ok"}` |
| POST   | `/api/contact`| Save a contact message (name, email, message) |

### Contact Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

## Sections

1. **Hero** — Name, title, tagline, and CTA button
2. **About** — Short bio and skills list
3. **Projects** — 3 project cards with tech tags and GitHub links
4. **Contact** — Form that POSTs to the FastAPI backend

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** FastAPI, Pydantic, Uvicorn
