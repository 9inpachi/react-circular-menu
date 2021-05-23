# React Circular Menu

[![Version](https://img.shields.io/npm/v/react-circular-menu.svg)](https://www.npmjs.com/package/react-circular-menu)
[![Downloads](https://img.shields.io/npm/dt/react-circular-menu.svg)](https://www.npmjs.com/package/react-circular-menu)

Circle based menu component for React with custom angle range and any number of menu items.

<div align="center">
  <img alt="React Circular Menu" title="React Circular Menu Example" src="https://user-images.githubusercontent.com/36920441/94362361-23493880-00d4-11eb-91df-a3bff8d43d2e.gif">
</div>

Install the npm package.

```bash
npm install react-circular-menu
# or
yarn add react-circular-menu
```

Install external dependencies `styled-components` and `@material-ui/core` if you don't already have them.

```bash
npm install styled-components @material-ui/core
# or
yarn add styled-components @material-ui/core
```

## Example

```jsx
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

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
        tooltipPlacement="right"
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

### CircleMenu

| Prop | Type | Description | Example
|--|--|--|--|
| startAngle | number | The angle at which the circle menu starts. That is, the angle at which the first item exists. | -90 |
| rotationAngle | number | The angle by which the menu is to be rotated. For example, 360 for a complete circle. | 270 |
| rotationAngleInclusive? | boolean | Whether to include the ending angle in rotation. Because an item at 360 degrees is the same as an item at 0 degree if inclusive. Leave this prop for angles other than 360 degrees unless otherwise desired. | false |
| radius? | number | Radius of the circle (in em). | 5 |
| itemSize? | number | Size of the menu toggle and menu items (in em). | 2 |
| className? | string | Class name to apply custom styles to circle menu wrapper. | "testClass" |
| menuToggleClassName? | string | Class name to apply custom styles to circle menu toggle. | "testClass" |
| onMenuToggle? | (menuActive: boolean) => void | Callback called on toggling the menu. | (menuActive) => console.log(menuActive) |

### CircleMenuItem

| Prop | Type | Description | Example
|--|--|--|--|
size? | number | Size of the menu item. Set by `itemSize` of `CircleMenu` component. | 2 |
link? | string | Link to point to a URL. | https://google.com |
tooltip? | string | Tooltip of the menu item that appears on hover. | "A Menu Item" |
tooltipPlacement? | 'bottom-end' \| 'bottom-start' \|  'bottom' \|  'left-end' \|  'left-start' \|  'left' \|  'right-end' \|  'right-start' \|  'right' \|  'top-end' \|  'top-start' \|  'top' | Placement position of the menu item tooltip. | "top" |
target? | string | The `target` attribute of anchor tag (`<a target="_blank"></a>`) if `link` prop is set. | "_blank" |
className? | string | Any extra class name for applying custom styles. | "testClass" |
style? | CSSProperties | Any extra inline styles for the component. | `{ background: 'red' }` |
onClick? | (MouseEvent<HTMLElement>) =>  void | Callback when the component is clicked. | `(e) => console.log('Clicked')` |
| radius? | number | Radius of the menu item from the menu toggle. Set by `CircleMenu` component. | 5 |
| menuActive? | boolean | Whether the menu and thus the menu item is active or not. Set by `CircleMenu` component. | true |
| rotationAngle? | number | Rotation angle of the menu item from the `startAngle` of `CircleMenu`. Set by `CircleMenu` component. | true |
