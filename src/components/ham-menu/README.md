## Avent UI - Ham Menu

The **Ham Menu** component is a hamburger menu with a cool curve animation. It accepts normal props as well as custom motion props for smooth transitions. You can also control animations for links and sublinks.

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/ham-menu
```
### 2 . Tailwind CSS setup 

AventUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official [installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add the following code to your tailwind.config.js file:
```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@avent-ui/ham-menu/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### 3. Import necessary Components

```jsx
import {
	HamMenu,
	HamMenuBurger,
	HamMenuBar,
	HamMenuContent,
	HamMenuLink,
	HamMenuSubContent,
	HamMenuSubLink,
	HamMenuTitle,
  HamMenuCurve,
} from "@avent-ui/ham-menu";
```

### 4. Use it as given below

```jsx
<HamMenu>
	<HamMenuBurger />
	<HamMenuBar>
		// add if u want a curved menu animation
		<HamMenuCurve /> 
		<HamMenuTitle>Navigation</HamMenuTitle>

		<HamMenuContent>
			<HamMenuLink> Main link 1 </HamMenuLink>
			<HamMenuLink> Main link 2 </HamMenuLink>
			<HamMenuLink> Main link 3 </HamMenuLink>
			<HamMenuLink> Main link 4 </HamMenuLink>
			<HamMenuLink> Main link 5 </HamMenuLink>
		</HamMenuContent>

		<HamMenuSubContent>
			<HamMenuSubLink> Sub link 1 </HamMenuSubLink>
			<HamMenuSubLink> Sub link 2 </HamMenuSubLink>
			<HamMenuSubLink> Sub link 3 </HamMenuSubLink>
			<HamMenuSubLink> Sub link 4 </HamMenuSubLink>
			<HamMenuSubLink> Sub link 5 </HamMenuSubLink>
		</HamMenuSubContent>
	</HamMenuBar>
</HamMenu>
```

### Properties

| Prop           |   Type   | Description                                                                                                           |  Default |
| -------------- | :------: | --------------------------------------------------------------------------------------------------------------------- | -------: |
| `animateDelay` | `number` | Animation delay in milliseconds for the menu links and sublinks.                                                      |   `0.05` |
| `motionProp`   | `object` | Defines the CSS animation properties for the menu. Contains { initial, start, end } keys for transform, opacity, etc. | `object` |
