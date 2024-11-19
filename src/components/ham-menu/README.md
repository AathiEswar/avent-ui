## Avent UI - Ham Menu

The **Hamneu** component is a hamburger menu with a cool curve animation. It accepts normal props as well as custom animation props for smooth transitions. You can also control animation delays for links and sublinks.

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/ham-menu
```

### 2. Import necessary Components

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
  HamMenuCurve
} from "@avent-ui/ham-menu";
```

### 3. Use it as given below

```jsx
<HamMenu>
	<HamMenuBurger />
	<HamMenuBar>
		<HamMenuCurve /> // add if u want a curved menu animation
		<HamMenuTitle>Navigation</HamMenuTitle>

		<HamMenuContent>
			<HamMenuLink> main link 1 </HamMenuLink>
			<HamMenuLink> main link 2 </HamMenuLink>
			<HamMenuLink> main link 3 </HamMenuLink>
			<HamMenuLink> main link 4 </HamMenuLink>
			<HamMenuLink> main link 5 </HamMenuLink>
		</HamMenuContent>

		<HamMenuSubContent>
			<HamMenuSubLink> sub link 1 </HamMenuSubLink>
			<HamMenuSubLink> sub link 1 </HamMenuSubLink>
			<HamMenuSubLink> sub link 1 </HamMenuSubLink>
			<HamMenuSubLink> sub link 1 </HamMenuSubLink>
			<HamMenuSubLink> sub link 1 </HamMenuSubLink>
		</HamMenuSubContent>
	</HamMenuBar>
</HamMenu>
```

### Properties

| Prop           |   Type   | Description                                                                                                           |  Default |
| -------------- | :------: | --------------------------------------------------------------------------------------------------------------------- | -------: |
| `animateDelay` | `number` | Animation delay in milliseconds for the menu links and sublinks.                                                      |   `0.05` |
| `motionProp`   | `object` | Defines the CSS animation properties for the menu. Contains { initial, start, end } keys for transform, opacity, etc. | `object` |
