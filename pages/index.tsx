import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FlightIcon from "@mui/icons-material/Flight";

const CheckMarkSlider = styled(Slider)(({ theme }) => ({
  pointerEvents: "none",
  color: "teal",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: "60px",
    width: "60px",
    backgroundColor: "transparent !important",
    "&::before": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 10,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 10,
  },
}));

const CheckMarkThumbComponent = (props: any) => {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      {/* <FlightIcon
        sx={{
          height: "40px",
          width: "40px",
          color: "brown",
          transform: "rotate(90deg)",
        }}
      /> */}
      <svg
        width="60"
        height="54"
        viewBox="0 0 60 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 21H54C55.5913 21 57.1174 21.6321 58.2426 22.7574C59.3679 23.8826 60 25.4087 60 27C60 28.5913 59.3679 30.1174 58.2426 31.2426C57.1174 32.3679 55.5913 33 54 33H42L30 54H21L27 33H15L9 39H0L6 27L0 15H9L15 21H27L21 0H30L42 21Z"
          fill="#146EC6"
        />
      </svg>
    </SliderThumb>
  );
};

const CustomizedSlider = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value > 100 ? 0 : value + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box sx={{ width: 320, margin: "50px auto" }}>
      <CheckMarkSlider
        value={value}
        components={{ Thumb: CheckMarkThumbComponent }}
      />
    </Box>
  );
};

export default CustomizedSlider;
