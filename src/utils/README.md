# AventUI - Utils

The **@avent-ui/utils** package is a collection of reusable utility functions used across the AventUI ecosystem. These utilities are designed to simplify common frontend development patterns, such as class name merging, environment detection, DOM handling, and more.

By centralizing shared logic, we ensure consistency, reduce duplication, and improve developer experience when working with AventUI components or building your own on top of them.

---
## 📦 Installation

```bash
npm install @avent-ui/utils
````

---

## 📥 Usage

```ts
import { cn } from "@avent-ui/utils";

// Example
const buttonClass = cn([
  "px-4 py-2 rounded",
  isActive && "bg-blue-500 text-white",
  isDisabled && "opacity-50",
]);
```

---

## 🧰 Available Utilities

| Utility | Description                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| `cn`    | Merges Tailwind CSS classes intelligently using `clsx` and `tailwind-merge`. |

---

## 📚 Utility Reference

### 1. `cn`

```ts
import { cn } from "@avent-ui/utils";
```

#### Description:

Combines multiple class name values into a single, intelligently merged string. Ideal for Tailwind CSS projects to resolve class conflicts and conditionally apply classes.

#### Function Signature:

```ts
function cn(classValue: ClassValue[]): string;
```

#### Parameters:

| Name         | Type           | Description                                                                     |
| ------------ | -------------- | ------------------------------------------------------------------------------- |
| `classValue` | `ClassValue[]` | An array of class names, boolean conditions, or falsy values handled by `clsx`. |

#### Returns:

| Type   | Description                                           |
| ------ | ----------------------------------------------------- |
| string | Merged, conflict-free class names as a single string. |

#### Example:

```ts
const cardClass = cn([
  "p-4 shadow-sm",
  isSelected && "border-blue-500",
  isDisabled && "opacity-50 cursor-not-allowed",
]);
```

#### Internals:

* Uses [`clsx`](https://www.npmjs.com/package/clsx) for flexible class name composition.
* Uses [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge) for resolving Tailwind CSS class conflicts.

---
