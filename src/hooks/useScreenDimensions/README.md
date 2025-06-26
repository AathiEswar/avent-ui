# AventUI - useScreenDimensions 

The **useScreenDimensions** hook provides real-time screen dimensions, device pixel ratio, orientation, and responsive breakpoint information. It includes debounced resize handling and automatically detects mobile, tablet, and desktop viewports based on configurable breakpoints.

## Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/useScreenDimensions
```

### 2. Import the hook

```jsx
import { useScreenDimensions } from '@avent-ui/useScreenDimensions';
```

### 3. Use it to get Screen Dimensions and Breakpoint Information

```jsx
// Basic usage with default breakpoints
const dimensions = useScreenDimensions();

// With custom options
const dimensions = useScreenDimensions({
  debounceMs: 150,
  mobileBreakPoint: 640,
  tabletBreakPoint: 1280
});

// Access properties
const { 
  screenWidth, 
  screenHeight, 
  isMobile, 
  isTablet, 
  isDesktop,
  devicePixelRatio,
  orientation 
} = dimensions;
```

## Properties

| Prop                | Type       | Description                                       |
|---------------------|:----------:|---------------------------------------------------|
| `screenWidth`       | `number`   | Current window width in pixels                    |
| `screenHeight`      | `number`   | Current window height in pixels                   |
| `devicePixelRatio`  | `number`   | Device pixel ratio (default: 1)                  |
| `orientation`       | `string \| null` | Screen orientation type (e.g., 'portrait-primary') |
| `isMobile`          | `boolean`  | True if screen width is below mobile breakpoint  |
| `isTablet`          | `boolean`  | True if screen width is between mobile and tablet breakpoints |
| `isDesktop`         | `boolean`  | True if screen width is above tablet breakpoint  |

## Options

| Option              | Type       | Default | Description                                     |
|---------------------|:----------:|:-------:|-------------------------------------------------|
| `debounceMs`        | `number`   | `100`   | Milliseconds to debounce resize events          |
| `mobileBreakPoint`  | `number`   | `768`   | Maximum width (exclusive) for mobile devices    |
| `tabletBreakPoint`  | `number`   | `1024`  | Minimum width (inclusive) for desktop devices   |

## Example Usage

```jsx
import React from 'react';
import { useScreenDimensions } from '@avent-ui/useScreenDimensions';

const ResponsiveComponent = () => {
  const { 
    screenWidth, 
    screenHeight, 
    isMobile, 
    isTablet, 
    isDesktop 
  } = useScreenDimensions();

  return (
    <div>
      <p>Screen: {screenWidth} x {screenHeight}</p>
      <p>Device Type: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</p>
      
      {isMobile && <MobileComponent />}
      {isTablet && <TabletComponent />}
      {isDesktop && <DesktopComponent />}
    </div>
  );
};
```

## Features

- **Real-time Updates**: Automatically updates on window resize and orientation change
- **Debounced Events**: Prevents excessive re-renders with configurable debounce timing
- **SSR Safe**: Provides sensible defaults when `window` is undefined
- **Responsive Breakpoints**: Built-in mobile, tablet, and desktop detection
- **Orientation Support**: Tracks device orientation changes
- **Device Pixel Ratio**: Access to high-DPI display information