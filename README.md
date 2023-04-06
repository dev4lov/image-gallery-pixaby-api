# Pixabay Image Gallery - React, Vite & Tailwind CSS

Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.

# create react app via Vite
  npm create vite@latest my-project -- --template react

# install dependencies
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

# Add the paths to all of your template files in your tailwind.config.js file.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

# Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  

# Build CSS and assets
npm run build
```
