## Avent UI - FlipHamMenu 

**FlipHamMenu** is a sleek, animated hamburger menu system. Built with motion and customization in mind, it offers smooth open/close transitions, staggered nav animations, and support for custom buttons and layouts.

### Installation

#### 1. Install the Component via npm

```jsx
npm install @avent-ui/flip-ham-menu
```

#### 2. Tailwind CSS Setup

FlipHamMenu uses Tailwind CSS classes internally, so make sure Tailwind is configured in your project. Follow the [official guide](https://tailwindcss.com/docs/installation) if not done already.

Then add the following to your `tailwind.config.js`:

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/flip-ham-menu/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. Import Components

```jsx
import {
  FlipHamMenu,
  FlipMenuBar,
  FlipHamBarLinks,
  FlipHamButton,
  FlipHamOpenButton,
  FlipHamCloseButton
} from '@avent-ui/flip-ham-menu';
```

### 4. Usage

```jsx
<FlipHamMenu enableNavLinkHoverAnim>
  <FlipMenuBar>
    <FlipHamBarLinks label="HOME" href="/home" />
    <FlipHamBarLinks label="ABOUT" href="/about" />
    <FlipHamBarLinks label="SERVICES" href="/services" />
    <FlipHamBarLinks label="CONTACT" href="/contact" />
  </FlipMenuBar>

  <FlipHamButton>
    <FlipHamOpenButton />
    <FlipHamCloseButton />
  </FlipHamButton>
</FlipHamMenu>
```

### 🧩 Components

| Component            | Type      | Description                                                             |
| -------------------- | --------- | ----------------------------------------------------------------------- |
| `FlipHamMenu`        | Container | Root provider. Manages open/close context and enables hover animations. |
| `FlipMenuBar`        | Panel     | Animated menu panel containing links. Supports staggered transitions.   |
| `FlipHamBarLinks`    | Link Item | Menu item with animated entrance and optional hover effects.            |
| `FlipHamButton`      | Wrapper   | Holds open/close buttons. Controls menu toggle behavior.                |
| `FlipHamOpenButton`  | Trigger   | Opens the menu. Can be styled or customized freely.                     |
| `FlipHamCloseButton` | Trigger   | Closes the menu. Accepts label and styling options.                     |

### ⚙️ Props

#### `FlipHamMenu`

| Prop                     | Type      | Description                                   | Default |
| ------------------------ | --------- | --------------------------------------------- | ------- |
| `enableNavLinkHoverAnim` | `boolean` | Enables animated hover effects for nav links. | `false` |

#### `FlipHamBarLinks`

| Prop    | Type     | Description                    |
| ------- | -------- | ------------------------------ |
| `label` | `string` | Display text for the link.     |
| `href`  | `string` | Navigation target (URL).       |
| `index` | `number` | Used internally for animation. |
| `hoverClassName` | `string` | class for element after hovering nav link |
| `hoverStyle` | `string` | style for element after hovering nav link |

#### `FlipHamCloseButton`

| Prop             | Type     | Description                          | Default  |
| ---------------- | -------- | ------------------------------------ | -------- |
| `closeMenuLabel` | `string` | Optional label for the close button. | `"MENU"` |

#### `FlipHamOpenButton`

| Prop             | Type     | Description                          | Default  |
| ---------------- | -------- | ------------------------------------ | -------- |
| `openMenuLabel` | `string` | Optional label for the open button. | `"CLOSE"` |

### 🧠 Behavior & Relationships

* `<FlipHamMenu>` is the root and must wrap everything.
* `<FlipMenuBar>` and `<FlipHamButton>` must be direct children of `FlipHamMenu`.
* `<FlipHamBarLinks>` should be used inside `FlipMenuBar`.
* `<FlipHamOpenButton>` and `<FlipHamCloseButton>` should go inside `FlipHamButton`.

**Animation System:**

* All components derive animation state from the context provided by `FlipHamMenu`.
* `FlipMenuBar` assigns an index to each `FlipHamBarLinks` to trigger staggered entrance animations.
* Hover effects (if enabled) apply smooth hover transforms and transitions.

### 🎨 Customization

* All components support `className` and `style` props.
* You can override animations, positions, and even replace buttons with your own components.
* Add or remove menu items by modifying the children of `FlipMenuBar`.

### 🧪 Example with Custom Buttons

```jsx
<FlipHamMenu enableNavLinkHoverAnim>
  <FlipMenuBar>
    <FlipHamBarLinks label="Dashboard" href="/dashboard" />
    <FlipHamBarLinks label="Settings" href="/settings" />
  </FlipMenuBar>

  <FlipHamButton>
    <button className="p-2 bg-black text-white rounded">Open</button>
    <button className="p-2 bg-red-500 text-white rounded">Close</button>
  </FlipHamButton>
</FlipHamMenu>
```
