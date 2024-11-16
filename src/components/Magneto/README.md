## Avent UI - Magneto 

The **Magneto** component acts like a traditional div, but with magnetic properties. It includes controls for **periodX**, **periodY**, **amplitudeX**, and **amplitudeY**, allowing for dynamic, magnetic-like motion effects.

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/magneto
```

### 2. Import any Component

```jsx
import { Magneto } from '@avent-ui/magneto';

```
### 3. Use it as a replacement for div

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
