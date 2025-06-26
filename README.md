# Avent UI

**Avent UI** is a React and TypeScript-based UI component library built on top of Tailwind CSS featuring beautiful designs and seamless animations. Built with modern web development in mind, it simplifies creating stunning user interfaces for your applications while offering full TypeScript support for a robust development experience.


## 📦 Installation

### 1. Install Avent UI via npm:

```bash
npm install avent-ui
```

### 2 . Tailwind CSS setup 

AventUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official [installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add the following code to your tailwind.config.js file:
```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/avent-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### 3. Import any Component

```jsx
import React from 'react';
import { Magneto } from 'avent-ui';

```
### 4. Use it Anywhere you want

```jsx
<Magneto>
    That simple!!
</Magneto>
```
<br/>

## 📦 Individual Component Installation
### Don't want to install the entire library ?
We gotchu! If you only need a particular component, you can install it individually to save bundle size:

### Install the Component with @avent-ui namespace :

```jsx
npm install @avent-ui/component-name
```
and follow the regular installation instruction <br/>

 **Note:** Each component comes with unique properties and usage patterns. For detailed information and examples, please refer to the documentation specific to each component.

 ## List Of Components : 
 [Magneto ](src/components/Magneto/README.md) <br/>
 [Ham Menu](src/components/ham-menu/README.md) <br/>
 [Button](src/components/Button/README.md) <br/>

 ## List of Hooks :
 [useRenderEnv](src/hooks/useRenderEnv/README.md) <br/>
 [useScreenDimensions](src/hooks/useScreenDimensions/README.md)

 ## List of Context : 
 [PageTransitionContext](src/context/Page%20Transition/README.md)

