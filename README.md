# 🤖 NLW-Agents

> An intelligent Q&A platform powered by AI that transforms audio content into interactive knowledge rooms

<div align="center">
  <table>
    <tr>
      <td width="50%" align="center">
        <h4>🏠 Room Dashboard</h4>
        <img src=".github/images/rooms-interface.png" alt="Room Dashboard - Create and manage knowledge rooms" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        <p><em>Create and manage your knowledge rooms with an intuitive interface</em></p>
      </td>
      <td width="50%" align="center">
        <h4>💬 Q&A Interface</h4>
        <img src=".github/images/qa-interface.png" alt="Q&A Interface - Ask questions and get AI-powered answers" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        <p><em>Ask questions and receive intelligent answers based on your audio content</em></p>
      </td>
    </tr>
  </table>
</div>

---

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Google Gemini AI](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

## 🎯 Overview

NLW-Agents is a cutting-edge application that combines AI-powered audio transcription with intelligent question-answering capabilities. Upload audio content to create knowledge rooms where users can ask questions and receive contextually relevant answers based on the transcribed content.

### ✨ Key Features

- 🎙️ **Audio Transcription**: Convert audio files into searchable text using Google Gemini AI
- 🧠 **Vector Embeddings**: Generate semantic embeddings for intelligent content matching
- 💬 **Smart Q&A**: Ask questions and get contextually relevant answers
- 🏠 **Room System**: Organize content into separate knowledge rooms
- 🎨 **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS
- ⚡ **Real-time Updates**: Dynamic content updates with React Query

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React)       │◄──►│   (Fastify)     │◄──►│  (PostgreSQL)   │
│                 │    │                 │    │                 │
│ • React Router  │    │ • TypeScript    │    │ • Drizzle ORM   │
│ • Tailwind CSS  │    │ • Zod Validation│    │ • Vector Search │
│ • React Query   │    │ • Google Gemini │    │ • Migrations    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) and Docker Compose
- [Git](https://git-scm.com/)

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NLW-Agents.git
   cd NLW-Agents
   ```

2. **Set up the database**
   ```bash
   cd backend
   docker-compose up -d
   ```

3. **Install backend dependencies**
   ```bash
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/nlw-agents
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

6. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### 🚀 Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The API will be available at `http://localhost:3333`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📖 Usage

### Creating a Knowledge Room

1. Navigate to the home page
2. Click "Create New Room"
3. Enter a room name and optional description
4. Click "Create Room"

### Adding Audio Content

1. Enter a knowledge room
2. Click "Upload Audio" or navigate to `/room/{roomId}/audio`
3. Record or upload an audio file
4. The system will automatically transcribe and process the content

### Asking Questions

1. In any room with audio content
2. Type your question in the question form
3. Submit to receive AI-generated answers based on the audio content

## 🛡️ API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/rooms` | List all rooms |
| `POST` | `/rooms` | Create a new room |
| `GET` | `/rooms/:id/questions` | Get questions for a room |
| `POST` | `/rooms/:id/questions` | Create a question |
| `POST` | `/rooms/:id/audio` | Upload audio to a room |

### Example Requests

**Create a room:**
```bash
curl -X POST http://localhost:3333/rooms \
  -H "Content-Type: application/json" \
  -d '{"name": "My Knowledge Room", "description": "A room for my content"}'
```

**Upload audio:**
```bash
curl -X POST http://localhost:3333/rooms/{roomId}/audio \
  -F "audio=@path/to/your/audio.mp3"
```

## 🏗️ Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with Drizzle ORM
- **AI**: Google Gemini API
- **Validation**: Zod
- **File Upload**: Fastify Multipart

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **UI Components**: Radix UI + Custom Components

### Development Tools
- **Database Migrations**: Drizzle Kit
- **Code Quality**: Biome
- **Type Safety**: TypeScript strict mode
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
NLW-Agents/
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── db/             # Database configuration and schema
│   │   ├── routes/         # API route handlers
│   │   ├── services/       # External service integrations
│   │   └── server.ts       # Main server file
│   ├── docker/             # Database setup scripts
│   └── package.json
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── http/           # API integration hooks
│   │   └── lib/            # Utility functions
│   └── package.json
└── README.md
```

## 🔧 Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Database Schema

The application uses the following main entities:

- **Rooms**: Knowledge containers
- **Questions**: User-submitted questions
- **Audio Chunks**: Processed audio segments with embeddings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built during NLW (Next Level Week) by Rocketseat
- Powered by Google Gemini AI
- UI components inspired by shadcn/ui

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/your-username/NLW-Agents/issues) page
2. Create a new issue if your problem isn't already reported
3. Join our community discussions

---

<p align="center">
  Made with ❤️ during NLW-Agents
</p>