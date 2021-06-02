import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "../styles/globals.css";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafa",
    },
    secondary: {
      main: "#4Fad",
    },
  },
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function MyApp({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default MyApp;
