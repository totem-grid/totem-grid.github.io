# Totem Grid Marketing Website

Find your tribe, instantly. Seamless connection at crowded events, no compass or cell service required.

🌐 **Live Site**: [https://www.totemgrid.io](https://www.totemgrid.io)

## About Totem Grid

Totem Grid is a revolutionary platform that enables seamless connections at crowded events without requiring compass navigation or cell service. Our technology helps people find their tribe instantly, making event networking effortless and intuitive.

## Development

### Prerequisites

- Node.js 18+
- npm (package manager)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/totem-grid/totem-grid.github.io.git
   cd totem-grid.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Deploy

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch.

You can also trigger a deployment manually:

1. Go to the [Actions tab](https://github.com/totem-grid/totem-grid.github.io/actions) in this repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the branch you want to deploy from and click "Run workflow"

## Configuration

Site configuration is managed in `src/config.ts`:

- **Site Info**: Title, description, author, domain
- **General Settings**: Layout, styling, and feature toggles
- **Totem Grid Features**: Beta signup, video demos, testimonials

## Content Management

- **Pages**: Located in `src/pages/`
- **Components**: Located in `src/components/`
- **Styles**: Located in `src/styles/`
- **Assets**: Located in `public/`

---

**Totem Grid** - Connecting people at events, effortlessly.
