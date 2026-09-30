# 📰 News App

A simple and modern news feed mobile application built with **React Native**, **Expo**, **Expo Router**, and **TypeScript**.

The application fetches posts from the [JSONPlaceholder](https://jsonplaceholder.cypress.io/) API and provides a clean interface for browsing posts, viewing post details, and reading comments.

## ✨ Features

- 📰 Browse the latest news-style posts
- 📄 View post details
- 💬 View comments for each post
- 🔄 Loading states
- ❌ Error handling
- 📭 Empty states
- 👆 Interactive post cards
- 📱 Responsive mobile UI
- 🧩 Reusable components
- 🪝 Custom React hooks for data fetching
- 🗂️ File-based routing with Expo Router
- 🔷 Full TypeScript support

## 🛠️ Tech Stack

- **React Native** `0.86.3`
- **Expo** `57`
- **Expo Router** `57`
- **React** `19`
- **TypeScript**
- **React Native Safe Area Context**
- **Fetch API**
- **JSONPlaceholder API**

## 🏗️ Architecture

The project follows a simple and reusable structure that separates UI components, hooks, services, types, and styles.

```text
src/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
│
├── base/
│   └── QueryState.tsx
│
├── components/
│   ├── Header.tsx
│   ├── PostCard.tsx
│   ├── PostDetails.tsx
│   └── CommentCard.tsx
│
├── hooks/
│   ├── usePosts.tsx
│   ├── usePostDetails.tsx
│   └── useComments.tsx
│
├── services/
│   └── newsApis.ts
│
├── styles/
│   ├── base.ts
│   ├── newsCard.ts
│   ├── postDetails.ts
│   └── comments.ts
│
└── types/
    └── index.ts
```

### Data Flow

```text
Screen
  │
  ▼
Custom Hook
  │
  ▼
News API Service
  │
  ▼
JSONPlaceholder API
  │
  ▼
State
  │
  ▼
UI Components
```

Responsible for:

- Fetching comments for a specific post
- Managing comments state
- Managing loading state
- Managing errors

A reusable component for handling:

- Loading state
- Error state
- Empty state
- Content state

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Expo Go, Android Emulator, or iOS Simulator

### 1. Clone the repository

```bash
git clone https://github.com/MahmoudNasser1242000/simple-news-app.git
```

### 2. Navigate to the project

```bash
cd simple-news-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npx expo start
```

## 📱 Run on Android

```bash
npm run android
```

## 🍎 Run on iOS

```bash
npm run ios
```

## 🌐 Run on Web

```bash
npm run web
```

## 🧹 Lint

```bash
npm run lint
```

## 🔗 Path Aliases

The project uses TypeScript path aliases for cleaner imports.

```typescript
import { Header, NewsCard, PostDetails } from "@/components";
import { usePosts } from "@/hooks";
```

The `@` alias points to the `src` directory.

## 📦 Project Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Run the application on Android |
| `npm run ios` | Run the application on iOS |
| `npm run web` | Run the application on Web |
| `npm run lint` | Run ESLint |
| `npm run reset-project` | Reset the Expo starter project |

## 🎯 Project Goals

This project was built to practice and demonstrate:

- React Native fundamentals
- Expo Router
- TypeScript
- API integration
- Custom React hooks
- Component reusability
- Error handling
- Loading and empty states
- Clean project organization
- Mobile UI development

## 📄 License

This project is licensed under the **MIT License**.