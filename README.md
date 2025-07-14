# 🔥 OLED Burn-in Checkr

A modern, responsive web application built with Angular for testing OLED screens for burn-in issues. This tool helps you detect permanent image retention on OLED displays by displaying solid colors across the entire screen.

- [🔥 OLED Burn-in Checkr](#-oled-burn-in-checkr)
- [💻 Local development](#-local-development)
  - [📋 Prerequisites](#-prerequisites)
  - [🚀 Installation](#-installation)
- [🐳 Docker deployment](#-docker-deployment)
  - [🏗️ Build and run with Docker](#️-build-and-run-with-docker)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [⭐ Support](#-support)


# 💻 Local development

This section covers how to set up the project locally for development and testing.

## 📋 Prerequisites

-   Node.js (v24.4.0 or later)
-   npm or yarn package manager

## 🚀 Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository and navigate into it
git clone https://github.com/jordan95v/oled-burn-in-checkr.git
cd oled-burn-in-checkr

# Install dependencies
npm install

# Start the development server
npm start
```

Then open your browser and navigate to `http://localhost:4200`

# 🐳 Docker deployment

This project includes Docker support for easy deployment:

## 🏗️ Build and run with Docker

```bash
# Build the Docker image
docker build -t oled-burn-in-checkr .

# Run the container
docker run -p 4200:4200 oled-burn-in-checkr
```

The application will be available at `http://localhost:4200`.

# 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

# 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# 🙏 Acknowledgments

-   Built with ❤️ by [jordan95v](https://github.com/jordan95v)
-   Powered by Angular and Tailwind CSS
-   Special thanks to the open-source community

# ⭐ Support

If you find this project useful, please consider giving it a star on [GitHub](https://github.com/jordan95v/oled-burn-in-checkr)!

---

**Disclaimer**: This tool is designed to help detect existing burn-in issues. Prolonged display of static images may contribute to burn-in on OLED displays. Use responsibly and avoid extended testing sessions.
