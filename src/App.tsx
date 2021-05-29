import { FC } from "react";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";

const App: FC = () => (
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
)

export default App;
