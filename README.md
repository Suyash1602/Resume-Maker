# Resume Builder

A modern, React-based resume builder application that helps users create professional resumes with ease. Built with React and Vite for optimal performance.

## Features

- **Real-time Preview**: See your resume changes instantly as you type
- **Modern UI**: Clean and responsive user interface
- **Export Options**: Save your resume in multiple formats
- **Customizable Sections**:
  - Personal Information
  - Professional Summary
  - Work Experience
  - Education
  - Skills
  - Projects
  - Social Links (LinkedIn, GitHub)

## Tech Stack

- React 18+
- Vite
- CSS3
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/resume-builder.git
```

2. Install dependencies

```bash
cd resume-builder
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
resume-builder/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # React components
│   │   ├── Footer.jsx
│   │   ├── ResumeForm.jsx
│   │   └── ResumePreview.jsx
│   ├── App.jsx       # Main application component
│   ├── App.css       # Global styles
│   └── main.jsx      # Application entry point
├── public/           # Public assets
├── index.html        # HTML template
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Created by Suyash Khandalkar
- Built with [Vite](https://vitejs.dev/)
- React Fast Refresh for development
- ESLint for code quality

