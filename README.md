# Aravind Garapati — Portfolio
<img width="1872" height="926" alt="image" src="https://github.com/user-attachments/assets/e8b695f7-253d-4296-933c-37d70319c5b7" />
<img width="1742" height="540" alt="image" src="https://github.com/user-attachments/assets/9119a9b2-40ee-485d-a916-9850acbf70e3" />
<img width="1799" height="810" alt="image" src="https://github.com/user-attachments/assets/35835deb-b1e0-4d90-990a-bff8dadea921" />

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
