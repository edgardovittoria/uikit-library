# Installation

### Install the npm package

```bash
npm install uikit-library-ev
```

### Install and configure TailwindCSS

- For the installation follow the [Official Guide](https://tailwindcss.com/docs/guides/create-react-app) on the Tailwind
  Web Site.
- Replace the content of your **tailwind.config.js** with:

```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/uikit-library-ev/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```