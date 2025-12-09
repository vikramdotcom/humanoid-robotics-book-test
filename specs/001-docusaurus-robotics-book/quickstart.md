# Quickstart: Docusaurus Robotics Book

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Setup Instructions

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   This will start the development server at http://localhost:3000

## Building for Production

To build the static site for deployment:

```bash
npm run build
```
or
```bash
yarn build
```

The built site will be available in the `build` directory.

## Deployment

### GitHub Pages
1. Update `docusaurus.config.js` with your organization and project names
2. Run: `npm run deploy`

### Vercel
1. Connect your repository to Vercel
2. Set build command to: `npm run build`
3. Set output directory to: `build`

## Adding New Content

To add a new chapter or modify existing content:

1. Edit the markdown files in the `docs` directory
2. Update `sidebars.js` if adding new sections
3. Test locally with `npm start`

## Project Structure

- `docs/` - Contains all book chapters in markdown format
- `src/` - Custom React components and CSS
- `static/` - Static assets like images
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation sidebar configuration
- `package.json` - Project dependencies and scripts