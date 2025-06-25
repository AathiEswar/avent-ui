## AventUI - Page Transition

The **Page Transition** context allows for easier implementation of page transition with **react-router-dom**. Pass the transition animation as a composite component in the TransitionProp

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/page-transition
```

### 2 . Tailwind CSS setup

AventUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official [installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS. Then you need to add the following code to your tailwind.config.js file:

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		// make sure it's pointing to the ROOT node_module
		"./node_modules/@avent-ui/page-transition/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

### 3. Import the Context

```jsx
import { PageTransitionContext } from "@avent-ui/page-transition";
```

### 4. Use it to wrap your routes

Make sure to add **Key** and **location** to your Routes in order to let the context understand the Componenet Tree Structure

```jsx
const location = useLocation();
return (
	<PageTransitionContext>
		<Routes key={location.pathname} location={location}>
			<Route path="/" element={<App />} />
			<Route path="home" element={<Home />} />
		</Routes>
	</PageTransitionContext>
);
```

### Properties

| Prop             |         Type          | Description             |          Default |
| ---------------- | :-------------------: | ----------------------- | ---------------: |
| `TransitionProp` | `Composite ReactNode` | Type Of Page Transition | SimpleTransition |

## List Of Trasitions :

PageTransitionContext<br/>
CurveCover<br/>
StaggerScreen<br/>
SimpleScreen<br/>
LeftToRightScreen<br/>
StackOverLap<br/>
StaggerBlock<br/>
