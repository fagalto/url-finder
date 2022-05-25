import { setCurrentTheme } from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobalStyles } from "@mui/material";

export const ViewProvider = (view: JSX.Element) => {
  const currentTheme = setCurrentTheme();
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: currentTheme.palette.background.default },
        }}
      />

      {view}
    </ThemeProvider>
  );
};

export default ViewProvider;
