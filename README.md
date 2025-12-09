# Human Robotics & Physical AI Book

This repository contains a comprehensive Docusaurus-based book on Human Robotics and Physical AI. The book explores the intersection of robotics, artificial intelligence, and physical interaction in real-world environments.

## About the Book

This documentation-style book covers:

- Fundamentals of humanoid robotics
- Physical AI concepts and applications
- Sensor integration and environmental interaction
- Control systems and locomotion
- Machine learning applications in robotics
- Human-robot interaction principles
- Safety considerations and ethical implications

## Installation

To run this book locally, you need to have Node.js installed (version 18 or higher).

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The output will be in the `build` directory, ready for deployment to GitHub Pages, Vercel, or any static hosting service.

## Deployment

### GitHub Pages
This project is configured for GitHub Pages deployment. To deploy:

1. Update the `organizationName` and `projectName` in `docusaurus.config.js`
2. Run: `npm run deploy`

### Vercel
This project is ready for Vercel deployment. Simply import the repository and Vercel will automatically detect the Docusaurus configuration.

### Other Platforms
The generated static files in the `build` directory can be deployed to any static hosting service.

## Project Structure

```
├── docs/                 # Book chapters and content
├── src/                  # Custom React components and CSS
│   ├── components/       # Reusable React components
│   ├── css/              # Custom styles
│   └── pages/            # Custom pages
├── static/               # Static assets (images, etc.)
├── docusaurus.config.js  # Main Docusaurus configuration
├── sidebars.js           # Navigation sidebar configuration
└── package.json          # Dependencies and scripts
```

## Contributing

Contributions to improve the book content or functionality are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact the maintainers.