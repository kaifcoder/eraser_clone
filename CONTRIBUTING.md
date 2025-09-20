# Contributing to Eraser.io Clone

Thank you for your interest in contributing to the Eraser.io Clone! This project is a collaborative effort to build a modern, feature-rich clone of Eraser.io using cutting-edge web technologies. We welcome contributions from developers of all skill levels.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Workflow](#contributing-workflow)
- [Code Guidelines](#code-guidelines)
- [Submitting Issues](#submitting-issues)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Testing](#testing)
- [Code of Conduct](#code-of-conduct)

## Getting Started

This project is built with:

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful and accessible React components
- **Convex** - Real-time database and backend
- **Kinde Auth** - Authentication service
- **EditorJS** - Block-style rich text editor
- **Excalidraw** - Collaborative whiteboard canvas

## Development Setup

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/eraser_clone.git
   cd eraser_clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Set up environment variables**:
   - Copy `.env.example` to `.env.local` (if available)
   - Configure your Convex and Kinde Auth credentials
   - Refer to the README.md for specific setup instructions

5. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
eraser_clone/
├── app/                    # Next.js App Router pages and layouts
│   ├── (routes)/          # Route groups
│   ├── _components/       # Shared components
│   └── _context/          # React contexts
├── components/            # Reusable UI components
│   └── ui/               # Shadcn/UI components
├── convex/               # Convex database functions
├── lib/                  # Utility functions
├── public/               # Static assets
├── CONTRIBUTING.md       # This file
├── LICENSE              # MIT License
├── README.md            # Project documentation
└── package.json         # Project dependencies and scripts
```

## Contributing Workflow

1. **Check existing issues** to see if your feature/bug is already being worked on
2. **Create a new issue** if one doesn't exist, describing your proposed changes
3. **Fork the repository** and create a new branch from `main`
4. **Make your changes** following our coding guidelines
5. **Test your changes** thoroughly
6. **Commit your changes** with clear, descriptive messages
7. **Push to your fork** and create a pull request
8. **Respond to feedback** during the review process

### Branch Naming Convention

Use descriptive branch names:
- `feature/add-user-dashboard`
- `fix/authentication-bug`
- `docs/update-readme`
- `refactor/optimize-file-management`

## Code Guidelines

### Code Style

- **TypeScript**: Write type-safe code with proper interfaces and types
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Format code consistently (will be configured)
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Components**: Create functional components with TypeScript interfaces

### Component Guidelines

```typescript
// Example component structure
interface ComponentProps {
  title: string;
  optional?: boolean;
}

const MyComponent: React.FC<ComponentProps> = ({ title, optional = false }) => {
  return (
    <div className="p-4 rounded-lg border">
      <h2 className="text-lg font-semibold">{title}</h2>
      {optional && <p>Optional content</p>}
    </div>
  );
};

export default MyComponent;
```

### Styling Guidelines

- Use **Tailwind CSS** classes for styling
- Follow the existing color scheme and spacing patterns
- Use Shadcn/UI components when possible
- Maintain responsive design principles
- Keep accessibility in mind (use proper ARIA labels, semantic HTML)

### Git Commit Messages

Write clear, descriptive commit messages:

```
feat: add file sharing functionality
fix: resolve authentication redirect issue
docs: update contributing guidelines
style: format code with prettier
refactor: optimize database queries
test: add unit tests for file operations
```

## Submitting Issues

When submitting an issue, please:

1. **Use a clear, descriptive title**
2. **Provide detailed reproduction steps** for bugs
3. **Include screenshots or videos** when relevant
4. **Specify your environment** (browser, OS, Node.js version)
5. **Check for existing issues** to avoid duplicates

### Issue Templates

- **Bug Report**: For reporting bugs and errors
- **Feature Request**: For suggesting new features
- **Documentation**: For documentation improvements
- **Question**: For general questions about the project

## Submitting Pull Requests

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Code is properly documented
- [ ] Commit messages are clear and descriptive
- [ ] Branch is up to date with the main branch

### Pull Request Guidelines

1. **Link to related issues** in the PR description
2. **Provide a clear description** of what the PR accomplishes
3. **Include screenshots** for UI changes
4. **List any breaking changes**
5. **Update documentation** if necessary

### PR Review Process

- All PRs require at least one review
- Address reviewer feedback promptly
- Keep discussions constructive and respectful
- Be open to suggestions and alternative approaches

## Testing

Currently, this project uses:
- **Next.js built-in linting** with ESLint
- Manual testing for UI components
- Integration testing with the Convex backend

### Running Tests

```bash
# Lint code
npm run lint

# Build the project
npm run build

# Start production server
npm start
```

### Writing Tests

When adding new features, consider:
- Writing unit tests for utility functions
- Testing component behavior
- Ensuring accessibility compliance
- Testing different screen sizes and devices

## Code of Conduct

This project follows a Code of Conduct to ensure a welcoming environment for all contributors. By participating, you agree to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences
- Show empathy towards other contributors

## Getting Help

If you need help or have questions:

1. **Check existing issues** and discussions
2. **Read the documentation** in README.md
3. **Create a new issue** with the "question" label
4. **Join community discussions** (if applicable)

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Release notes for significant contributions

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the Eraser.io Clone! Together, we're building something extraordinary. 🚀