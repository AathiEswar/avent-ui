## AventUI - Button

The **Button** component is a versatile, fully customizable button built with Tailwind CSS and powered by `class-variance-authority (CVA)`. It supports multiple variants, sizes, and disabled states, allowing you to use consistent and themeable buttons across your application.

### Installation

#### 1. Install the Component via npm:

```bash
npm install @avent-ui/button
```

#### 2. Tailwind CSS Setup

This component relies on Tailwind CSS for styling. Make sure Tailwind is installed and configured in your project. You can follow the official [Tailwind installation guide](https://tailwindcss.com/docs/installation).

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@avent-ui/button/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import the Component

```jsx
import Button from '@avent-ui/button';
```

### 4. Use the Component

```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

---

### Variants

| Variant     | Description                                     |
|-------------|-------------------------------------------------|
| `default`   | Solid dark background with white text           |
| `outline`   | White background, gray border, dark text        |
| `secondary` | Light gray background, dark text                |
| `ghost`     | Transparent background, subtle hover            |
| `link`      | Styled as a hyperlink                           |
| `primary`   | Blue primary button with hover effect           |
| `icon`      | Icon-style button with square aspect ratio      |
| `success`   | Green success button                            |
| `warning`   | Orange warning button                           |
| `danger`    | Red danger button                               |

---

### Sizes

| Size       | Description               |
|------------|---------------------------|
| `xs`       | Extra small padding/text  |
| `sm`       | Small padding/text        |
| `default`  | Base size (default)       |
| `lg`       | Large button              |
| `xl`       | Extra large button        |
| `icon`     | Square icon button        |
| `icon-sm`  | Small icon button         |
| `icon-lg`  | Large icon button         |

---

### Props

| Prop       | Type                     | Description                            | Default   |
|------------|--------------------------|----------------------------------------|-----------|
| `variant`  | `"default" | "outline" | ...` | Button style variant                | `default` |
| `size`     | `"xs" | "sm" | ...`     | Size of the button                    | `default` |
| `disabled` | `boolean`                | Whether the button is disabled         | `false`   |
| `...props` | `ButtonHTMLAttributes`   | Native button attributes (onClick etc) | —         |

---

### Disabled Styling

When `disabled` is true, styles are adjusted to reflect the inactive state. Custom compound variants ensure a consistent look across all variants.

---

### Utility

This component uses:

- `React.forwardRef` for ref forwarding
- `class-variance-authority` for clean and scalable class logic
- TailwindCSS utility classes

---
