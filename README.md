# React Circular Menu

[![Version](https://img.shields.io/npm/v/react-circular-menu.svg)](https://www.npmjs.com/package/react-circular-menu)
[![Downloads](https://img.shields.io/npm/dt/react-circular-menu.svg)](https://www.npmjs.com/package/react-circular-menu)

Circle based menu component for React with custom angle range and any number of menu items.

Demo: [https://9inpachi.github.io/react-circular-menu](https://9inpachi.github.io/react-circular-menu)

<div align="center">
  <img alt="React Circular Menu" title="React Circular Menu Example" src="https://user-images.githubusercontent.com/36920441/158416612-b9765cd1-334b-4d45-8d12-b64aa1c759de.gif">
</div>

## Table of Contents

- [Setup](#setup)
- [Example](#example)
- [Props](#props)
  - [CircleMenu](#circlemenu)
  - [CircleMenuItem](#circlemenuitem)

## Setup

Install the npm package.

```bash
npm install react-circular-menu
# or
yarn add react-circular-menu
```

Install external dependency `styled-components` if you don't already have it.

```bash
npm install styled-components
# or
yarn add styled-components
```

## Example

```jsx
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export const TestMenuComponent = (props) => {
  return (
    <CircleMenu
      startAngle={-90}
      rotationAngle={360}
      itemSize={2}
      radius={5}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        onClick={() => alert("Clicked the item")}
        tooltip="Email"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <MailIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help">
        <HelpOutlineIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Location">
        <MapIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Info">
        <InfoIcon />
      </CircleMenuItem>
    </CircleMenu>
  );
};
```

## Props

All angles are in degrees.

- [CircleMenu](#circlemenu)
- [CircleMenuItem](#circlemenuitem)

### CircleMenu

- [`startAngle: number`](#startangle-number)
- [`rotationAngle: number`](#rotationangle-number)
- [`rotationAngleInclusive?: boolean`](#rotationangleinclusive-boolean)
- [`radius?: number`](#radius-number)
- [`itemSize?: number`](#itemsize-number)
- [`className?: string`](#classname-string)
- [`menuToggleElement?: ReactElement`](#menutoggleelement-reactelement)
- [`menuToggleClassName?: string`](#menutoggleclassname-string)
- [`onMenuToggle?: (menuActive: boolean) => void`](#onmenutoggle-menuactive-boolean--void)
- [`children: ReactNode`](#children-reactnode)

#### `startAngle: number`

The angle at which the circle menu starts. That is, the angle at which the first item exists.

Example: `-90`

#### `rotationAngle: number`

The angle by which the menu is to be rotated. For example, 360 for a complete circle.

Example: `270`

#### `rotationAngleInclusive?: boolean`

Whether to include the ending angle in rotation. Because an item at 360 degrees is the same as an item at 0 degree if inclusive. Leave this prop for angles other than 360 degrees unless otherwise desired.

Example: `false`

#### `radius?: number`

Radius of the circle (in em).

Example: `5`

#### `itemSize?: number`

Size of the menu toggle and menu items (in em).

Example: `2`

#### `className?: string`

Class name to apply custom styles to circle menu wrapper.

Example: `testClass`

#### `menuToggleElement?: ReactElement`

Custom element for the menu toggle.

**NOTE: The element must have an `onClick` prop. The prop doesn't need to be specified but it should exist.**

Example: `<button>Toggle Menu</button>`

#### `menuToggleClassName?: string`

Class name to apply custom styles to circle menu toggle.

Example: `testClass`

#### `onMenuToggle?: (menuActive: boolean) => void`

Callback called on toggling the menu.

Example:

```js
(menuActive) => console.log(menuActive);
```

#### `children: ReactNode`

Children of the menu.

### CircleMenuItem

- [`size?: number`](#size-number)
- [`link?: string`](#link-string)
- [`tooltipPlacement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'`](#tooltipplacement-bottom-end--bottom-start--bottom--left-end--left-start--left--right-end--right-start--right--top-end--top-start--top)
- [`target?: string`](#target-string)
- [`className?: string`](#classname-string-1)
- [`style?: CSSProperties`](#style-cssproperties)
- [`onClick?: (event: MouseEvent) => void`](#onclick-event-mouseevent--void)
- [`radius?: number`](#radius-number-1)
- [`menuActive?: boolean`](#menuactive-boolean)
- [`children: ReactNode`](#children-reactnode-1)

#### `size?: number`

Size of the menu item. Set by `itemSize` of `CircleMenu` component.

Example: `2`

#### `link?: string`

Link to point to a URL.

Example: `https://google.com`

#### `tooltipPlacement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'`

Placement position of the menu item tooltip.

Example: `top`

#### `target?: string`

The `target` attribute of anchor tag (`<a target="_blank"></a>`) if link prop is set.

Example: `_blank`

#### `className?: string`

Extra class name for applying custom styles.

Example: `testClass`

#### `style?: CSSProperties`

Extra inline styles for the component.

Example: `{ background: 'red' }`

#### `onClick?: (event: MouseEvent) => void`

Callback when the component is clicked.

Example:

```js
(event) => console.log("Clicked");
```

#### `radius?: number`

Radius of the menu item from the menu toggle. Set by `CircleMenu` component.

Example: `5`

#### `menuActive?: boolean`

Whether the menu and thus the menu item is active or not. Set by `CircleMenu` component.

Example: `true`

#### `rotationAngle?: number`

Rotation angle in degrees of the menu item from the `startAngle` of `CircleMenu`. Set by `CircleMenu` component.

Example: `90`

#### `children: ReactNode`

Children of the menu.
