# AI Agent App

A modernAI chat application built with React and Vite. This application provides an interface for interacting with multiple AI agents, managing conversations, and selecting different AI models.

## Features

- **Multiple AI Agents** - Switch between different AI agents seamlessly
- **Chat Conversations** - Create, manage, and organize multiple chat sessions
- **Model Selection** - Choose from available AI models for each conversation
- **Markdown Support** - Rich markdown rendering for AI responses with syntax highlighting
- **Export Conversations** - Download conversations as PDF files
- **Modern UI** - Built with Material-UI for a beautiful, responsive interface
- **Mobile Responsive** - Fully responsive design that works on all devices
- **Real-time Updates** - Live conversation updates and loading states

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Component library and styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API requests
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Backend API** running on `http://localhost:8080` (or configure a different endpoint)
backend API Can be found in the [AI Agent Service](https://github.com/IshikaGopie/AI-Agent-Service) repository

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI-Agent-APP
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Create a `.env` file in the root directory to customize the API endpoint:

```env
VITE_AI_AGENT_SERVICE_ENDPOINT=http://localhost:8080
```

If not set, the app defaults to `/api` which is proxied to `http://localhost:8080` via Vite's proxy configuration.

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 5. Start the Backend API

Make sure your backend API is running on `http://localhost:8080`. The app expects the following API endpoints:

- `GET /agents` - Get list of available AI agents
- `GET /models` - Get list of available AI models
- `GET /conversations` - Get all conversations
- `POST /conversations` - Create a new conversation
- `GET /conversations/:id` - Get a specific conversation
- `GET /conversations/:id/messages` - Get messages for a conversation
- `POST /chat` - Send a message and get AI response
- `DELETE /conversations/:id` - Delete a conversation
- `DELETE /conversations/:id/clear` - Clear messages in a conversation
- `GET /conversations/:id/download` - Download conversation as PDF

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/          # React components
│   ├── atoms/          # Basic UI components (Button, Input, etc.)
│   ├── molecules/      # Composite components (ChatInput, AgentCard, etc.)
│   ├── organisms/      # Complex components (Sidebar, ChatConversation, etc.)
│   └── templates/      # Layout templates (ChatLayout)
├── contexts/           # React contexts (NotificationContext)
├── pages/              # Page components (Assistant)
├── plugins/            # Service plugins and configuration
├── services/           # API services (AiAgent, ApiRequest)
└── state/              # Redux store and slices
    └── agent/          # Agent-related state management
```

## Component Architecture

The project follows atomic design principles:

- **Atoms**: Basic building blocks (buttons, inputs, icons)
- **Molecules**: Simple combinations of atoms (form inputs, cards)
- **Organisms**: Complex UI sections (sidebar, chat conversation)
- **Templates**: Page-level layouts

## State Management

The application uses Redux Toolkit for state management. The main state slice (`agentSlice`) manages:

- Available agents
- Chat sessions/conversations
- Active chat selection
- Conversation messages
- Loading states
- Available models and model selection

## API Integration

The app communicates with a backend API through the `AiAgentService` class. All API requests are handled via the `ApiRequest` service, which provides a consistent interface for HTTP operations.

## Development

### Adding a New Component

1. Create the component file in the appropriate directory (`atoms`, `molecules`, `organisms`, or `templates`)
2. Export the component
3. Import and use it in your pages or other components

### Adding a New Feature

1. Update the Redux slice if state management is needed
2. Add API methods to `AiAgentService` if backend integration is required
3. Create or update components as needed
4. Wire everything together in the `Assistant` page component

## Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory, ready to be deployed to any static hosting service.

## Troubleshooting

### API Connection Issues

- Ensure the backend API is running on the correct port
- Check the `VITE_AI_AGENT_SERVICE_ENDPOINT` environment variable
- Verify the Vite proxy configuration in `vite.config.js`

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual port number.

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
