# Pixabay Image Gallery - React, Vite & Tailwind CSS

Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.

1 create react app via Vite
  npm create vite@latest my-project -- --template react

2 install dependencies
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

3 Add the paths to all of your template files in your tailwind.config.js file.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

4 Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  

# Build CSS and assets
npm run build
```
