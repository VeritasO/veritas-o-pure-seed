# VERITAS.O Web Portal

## Overview
The VERITAS.O Web Portal is a web application designed to facilitate narrative truth and emotional mapping through a user-friendly interface. This project utilizes modern web technologies including React, Vite, TailwindCSS, and Express.

## Project Structure
```
veritas-o-web-portal
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── agents
│   │   ├── agentTree.ts    # Definition of the agent tree structure (A1–A21)
│   │   └── index.ts        # Exports for easy access to agents
│   ├── books
│   │   └── seedBooks.ts    # Seed data for Books I–V
│   ├── components
│   │   └── App.tsx         # Main React component
│   ├── server
│   │   └── index.ts        # Express server setup
│   ├── styles
│   │   └── tailwind.css     # TailwindCSS styles
│   ├── main.tsx            # Entry point for the React application
│   └── vite-env.d.ts       # TypeScript definitions for Vite
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.ts           # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd veritas-o-web-portal
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
This will start the Vite development server and open the application in your default web browser.

### Building for Production
To build the application for production, run:
```
npm run build
```
This will create an optimized build of the application in the `dist` directory.

### API Server
To start the Express server, run:
```
npm run server
```
This will start the backend API server.

## Usage
- Navigate through the application to explore narrative truth and emotional mapping features.
- Use the agent tree and seed books to interact with the system.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.