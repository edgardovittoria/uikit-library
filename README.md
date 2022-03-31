# Installation

### Install the npm package

```bash
npm install uikit-library-ev
```

### Install and configure TailwindCSS

- For the installation follow the [Official Guide](https://tailwindcss.com/docs/guides/create-react-app) on the Tailwind
  Web Site.
- Replace the content of your **tailwind.config.js** with:

```ts
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

- Replace the content of your **index.css** (or **tailwin.css**) width:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    h1 {
        @apply text-5xl font-semibold mt-2 mb-2;
    }

    h2 {
        @apply text-3xl font-medium mt-2 mb-2;
    }

    h3 {
        @apply text-2xl font-medium;
    }

    h4 {
        @apply text-xl font-medium;
    }

    h5 {
        @apply text-lg font-bold;
    }

    h6 {
      @apply text-base font-bold;
    }
}
```