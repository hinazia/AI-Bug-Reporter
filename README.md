# AI Bug Reporter

An AI-powered bug tracking application built with **Node.js**, **Express**, **PostgreSQL**, and **Ollama (Llama 3.2)**. Users can create, update, delete, and manage bug reports through a simple web interface, while an integrated AI assistant answers questions about the stored bugs using natural language.

The application is fully containerized using **Docker Compose**, demonstrating a multi-container architecture with service-to-service networking, persistent volumes, and environment variables.

---

## Features

* Create, view, update, and delete bug reports (CRUD)
* AI chatbot powered by **Llama 3.2** via Ollama
* Query bug reports using natural language
* PostgreSQL database for persistent storage
* Simple web-based frontend
* Dockerized multi-container setup
* Persistent volumes for PostgreSQL and Ollama models
* Health checks and container networking with Docker Compose

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Ollama
* Llama 3.2
* Docker
* Docker Compose
* HTML
* CSS
* JavaScript

---

## Project Structure

```text
.
├── app/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── public/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── .env.example
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Create the environment file

Copy `.env.example` and create a `.env` file.

### 3. Option 01 : Build and start the containers (Recommended)

```bash
docker compose up --build
```

#### Option 02 : Build form Docker Hub Image

```bash
docker pull hinaqazi612/ai-bug-reporter:latest
docker compose up
```

### 4. Download the Llama model

The Ollama image does **not** include models by default.

Run:

```bash
docker compose exec ollama ollama pull llama3.2
```

Verify:

```bash
docker compose exec ollama ollama list
```

---

## Access the Application

Frontend:

```text
http://localhost:3000
```

---

## 🐳 Docker Services

| Service         | Description                                    |
| --------------- | ---------------------------------------------- |
| **webapp**      | Node.js & Express backend serving the frontend |
| **postgres_db** | PostgreSQL database                            |
| **ollama**      | Runs the Llama 3.2 model                       |

---

## Example AI Questions

* Which bugs are currently open?
* Show all high-priority bugs.
* Which bugs are assigned to John?
* Summarize all reported bugs.
* How many bugs are currently resolved?

---

## Docker Concepts Demonstrated

* Multi-stage Docker builds
* Docker Compose
* Service-to-service networking
* Named volumes
* Environment variables
* Health checks
* Containerized AI integration
* Non-root user
* Docker image optimization

---

## Troubleshooting

### Ollama model missing

If the chatbot does not respond, download the model:

```bash
docker compose exec ollama ollama pull llama3.2
```

---

### Reset everything

```bash
docker compose down -v
docker compose up --build
```

> **Note:** `docker compose down -v` removes PostgreSQL data and Ollama models.

---

## License

This project was created for learning and portfolio purposes.
