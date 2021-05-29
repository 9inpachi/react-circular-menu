import { FC } from "react";
import styled from "styled-components";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";

const StyledGrid = styled.div`
  display: grid;
  width: 40rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  justify-items: stretch;

  @media (max-width: 768px) {
    width: 80vw;
    margin: 5rem 0;
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

const StyledLabel = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.625rem;
  font-weight: bold;
`;

const exampleAngles = [
  {
    startAngle: -90,
    rotationAngle: 360,
    rotationAngleInclusive: false,
    label: "Full Circle",
  },
  {
    startAngle: -90,
    rotationAngle: 180,
    rotationAngleInclusive: true,
    label: "Half Circle",
  },
  {
    startAngle: -90,
    rotationAngle: 90,
    rotationAngleInclusive: true,
    label: "Top Right Quarter Circle",
  },
  {
    startAngle: 90,
    rotationAngle: 90,
    rotationAngleInclusive: true,
    label: "Bottom Left Quarter Circle",
  },
];

const App: FC = () => (
  <StyledGrid>
    {exampleAngles.map((props, index) => (
      <StyledCard key={index}>
        <CircleMenu itemSize={2} radius={5} {...props}>
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
        <StyledLabel>{props.label}</StyledLabel>
      </StyledCard>
    ))}
  </StyledGrid>
);

export default App;
