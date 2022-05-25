import { ThemeOptions } from "@material-ui/core/styles/createTheme";
import { createTheme } from "@material-ui/core/styles";
import { theme } from "../State/theme";
import { useRecoilValue } from "recoil";

const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#455a64",
    },
    secondary: {
      main: "#00bfa5",
    },
    info: {
      main: "#da9c4d",
    },
    success: {
      main: "#3d5afe",
    },
    error: {
      main: "#f91706",
    },
    warning: {
      main: "#fb9807",
    },
  },
};
export const themeOptions2: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const themeOptions3: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#f4bc1e",
    },
    error: {
      main: "#f50057",
    },
    warning: {
      main: "#c1f41e",
    },
    info: {
      main: "#1EF4BC",
    },
    success: {
      main: "#56F41E",
    },
  },
};

const SetTheme = (options: ThemeOptions) => {
  const mode = useRecoilValue(theme);
  const themeOptions = options;
  themeOptions.palette?.type && (themeOptions.palette.type = mode);

  return createTheme(themeOptions);
};
const setCurrentTheme = () => SetTheme(themeOptions3);

export { setCurrentTheme };
