## AventUI - useRenderEnv 

The **useRenderEnv** hook determines whether the component is being rendered on the server (SSR) or the client (CSR) and provides the current state, including a loading indicator. It uses **useEffect** to update the state once the component is hydrated on the client, ensuring the correct environment is reflected.

### Installation

### 1. Install the Component via npm:

```jsx
npm install @avent-ui/useRenderEnv
```

```
### 3. Import the hook

```jsx
import useRenderEnv from '@avent-ui/useRenderEnv';

```
### 4. Use it to find your Rendering Environment

```jsx

  // return boolean values
  const { isLoading, isClient, isServer } = useRenderEnv();

```
### Properties

| Prop         | Type       | Description                                       |
|--------------|:----------:|---------------------------------------------------|
| `isClient`    | `boolean`   | Indicates whether the component is being rendered on the client side |
| `isServer`    | `boolean`   | Indicates whether the component is being rendered on the server side |
| `isLoading`   | `boolean`   | Represents the loading state of the component, while data is fetched or app is hydrated |
