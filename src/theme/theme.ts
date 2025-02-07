export const darkTheme = {
  colors: {
    primary: "#495057",
    secondary: "#343a40",
    background: "#0c0c0c",
    surface: "hsl(215, 20%, 18%)",
    muted: "#a7bed3",
    text: "#f8f9fa",
    highlight: "hsl(30, 90%, 55%)",
    gradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
    cold: "hsl(210, 51.60%, 74.90%)",
    hot: "hsl(30, 90%, 55%)",
  },
  shadow: {
    default: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export const lightTheme = {
  colors: {
    primary: "#dee2e6",
    secondary: "#adb5bd",
    background: "#f8f9fa",
    surface: "hsl(0, 0%, 100%)",
    muted: "hsl(210, 10%, 60%)",
    text: "#0c0c0c",
    highlight: "hsl(30, 90%, 55%)",
    gradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,

    cold: "hsl(210, 51.60%, 74.90%)",
    hot: "hsl(30, 90%, 55%)",
  },
  shadow: {
    default: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    inner: "inset 0px 1px 2px rgba(0, 0, 0, 0.05)",
  },
};

export type ThemeType = typeof lightTheme;
