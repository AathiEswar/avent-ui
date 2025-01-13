## AventUI - Magneto 

The **Magneto** component acts like any traditional container , but with magnetic properties. It includes controls for **period**, and **amplitude** in both axis allowing for dynamic, magnetic-like motion effects.

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/magneto
```
### 2 . Tailwind CSS setup 

AventUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official [installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add the following code to your tailwind.config.js file:
```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@avent-ui/magneto/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
### 3. Import the Component

```jsx
import { Magneto } from '@avent-ui/magneto';

```
### 4. Use it as a replacement for any container tag

```jsx
<Magneto>
    Avent UI is Amaaaazing!!
</Magneto>
```
### Properties

| Prop         | Type       | Description                                       | Default |
|--------------|:----------:|---------------------------------------------------|--------:|
| `periodX`    | `number`   | Frequency of the magnetic movement along the X axis | `0.3`     |
| `periodY`    | `number`   | Frequency of the magnetic movement along the Y axis | `0.3`     |
| `amplitudeX` | `number`   | Intensity of movement along the X axis            | `1`     |
| `amplitudeY` | `number`   | Intensity of movement along the Y axis            | `1`     |
