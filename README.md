# Praxis Innovations Website

A modern, responsive website built with **Next.js**, TypeScript, and Styled Components.

## 🚀 Features

- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe development
- **Styled Components** - CSS-in-JS styling
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Built-in optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Styled Components
- **Package Manager**: Yarn
- **Deployment**: Docker + Kubernetes (GKE)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd praxis-Innovations
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## 🐳 Docker

### Build the image
```bash
docker build -t praxis-innovations-website .
```

### Run locally
```bash
docker run -p 3000:3000 praxis-innovations-website
```

### Deploy script
```bash
# Local deployment
./scripts/deploy.sh local

# GKE deployment
./scripts/deploy.sh gke
```

## ☸️ Kubernetes Deployment

The application includes Kubernetes manifests for deployment to GKE:

- **Deployment** - Application pods
- **Service** - Load balancer
- **Ingress** - External access with SSL
- **HPA** - Auto-scaling

## 📁 Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # HTML document
│   ├── index.tsx         # Home page
│   ├── 404.tsx          # 404 error page
│   └── 500.tsx          # 500 error page
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── constants/       # App constants
│   ├── types/           # TypeScript types
│   ├── assets/          # Static assets
│   └── index.css        # Global styles
├── public/               # Static files
├── scripts/              # Deployment scripts
├── Dockerfile            # Docker configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Configuration

### Next.js Config
- **Standalone output** - Optimized for Docker
- **Styled Components** - Server-side rendering support
- **Image optimization** - Built-in image handling

### TypeScript Config
- **Path aliases** - Clean imports with `@/` prefix
- **Strict mode** - Enhanced type safety
- **Next.js types** - Full framework support

## 🚀 Deployment

### Local Development
```bash
yarn dev
```

### Production Build
```bash
yarn build
yarn start
```

### Docker Deployment
```bash
./scripts/deploy.sh local
```

### GKE Deployment
```bash
./scripts/deploy.sh gke
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** - Full feature set
- **Tablet** - Adaptive layout
- **Mobile** - Touch-friendly interface

## 🎨 Styling

- **Styled Components** - Component-scoped styles
- **CSS Variables** - Consistent design tokens
- **Responsive Breakpoints** - Mobile-first approach
- **Modern CSS Features** - Grid, Flexbox, CSS Variables

## 🔍 Performance

- **Next.js Optimizations** - Automatic code splitting
- **Image Optimization** - WebP format support
- **Bundle Analysis** - Built-in performance monitoring
- **SEO Optimized** - Server-side rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary to Praxis Innovations.

## 🆘 Support

For support and questions, please contact the development team.
