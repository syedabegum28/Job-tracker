import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Customize font family
  },
});

export default CustomTheme;